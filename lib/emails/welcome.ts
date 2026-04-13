export const WELCOME_EMAIL_SUBJECT = "Thanks for Applying – Lepley Nutrition";

type WelcomeEmailParams = {
  clientName?: string;
};

export function getWelcomeEmailTemplate({ clientName }: WelcomeEmailParams = {}) {
  const greeting = clientName ? `Hi ${clientName},` : "Hi there,";

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 640px; margin: 0 auto;">
      <h1 style="font-size: 24px; margin-bottom: 12px;">Thanks for Applying</h1>
      <p style="margin: 0 0 14px;">${greeting}</p>
      <p style="margin: 0 0 14px;">Thank you for your inquiry! I've received your application and will be reviewing it shortly.</p>
      <p style="margin: 0 0 14px;"><strong>What happens next:</strong> I'll reach out to you directly via email or text to discuss your goals, answer any questions, and make sure we're a great fit before getting started.</p>

      <h2 style="font-size: 18px; margin: 20px 0 10px;">In the Meantime</h2>
      <p style="margin: 0 0 14px;">Here are a few things you can have ready for our conversation:</p>
      <ul style="margin: 0 0 14px 20px; padding: 0;">
        <li>Any specific foods you love or can't stand</li>
        <li>Your typical weekly schedule (work, training, etc.)</li>
        <li>Any questions about the program</li>
      </ul>

      <h2 style="font-size: 18px; margin: 20px 0 10px;">Response Time</h2>
      <p style="margin: 0 0 14px;">You can expect to hear from me within 24-48 hours. If you have any immediate questions, feel free to reply to this email.</p>

      <p style="margin: 18px 0 0;">Talk soon,<br />Kaylie<br />Lepley Nutrition</p>
    </div>
  `;

  return {
    subject: WELCOME_EMAIL_SUBJECT,
    html
  };
}
