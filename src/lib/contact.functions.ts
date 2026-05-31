import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("contact_messages")
      .insert(data);

    if (error) {
      console.error("DB insert failed:", error);
      throw new Error("Could not save your message. Please try again.");
    }

    // Best-effort email notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["basharatali.work@gmail.com"],
            reply_to: data.email,
            subject: `[Portfolio] ${data.subject}`,
            html: `
              <div style="font-family:system-ui,sans-serif;max-width:560px;margin:auto;padding:24px;background:#0b0f14;color:#e6edf3;border-radius:12px;border:1px solid #2a3340">
                <h2 style="color:#7dffb0;margin:0 0 12px">New portfolio message</h2>
                <p style="margin:4px 0"><b>From:</b> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
                <p style="margin:4px 0"><b>Subject:</b> ${escapeHtml(data.subject)}</p>
                <hr style="border:none;border-top:1px solid #2a3340;margin:16px 0"/>
                <pre style="white-space:pre-wrap;font-family:inherit;margin:0">${escapeHtml(data.message)}</pre>
              </div>
            `,
          }),
        });
        if (!res.ok) {
          console.error("Resend send failed:", res.status, await res.text());
        }
      } catch (err) {
        console.error("Resend exception:", err);
      }
    }

    return { ok: true };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}