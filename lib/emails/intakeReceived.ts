export const INTAKE_RECEIVED_EMAIL_SUBJECT = "Got Your Intake – Lepley Nutrition";

type IntakeReceivedEmailParams = {
  clientName?: string;
};

export function getIntakeReceivedEmailTemplate({ clientName }: IntakeReceivedEmailParams = {}) {
  const greeting = clientName ? `Hi ${clientName},` : "Hi there,";

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 640px; margin: 0 auto;">
      <h1 style="font-size: 24px; margin-bottom: 12px;">Got Your Intake</h1>
      <p style="margin: 0 0 14px;">${greeting}</p>
      <p style="margin: 0 0 14px;">Thanks for taking the time to fill this out. It's a big help in building a plan that actually fits your life.</p>
      <p style="margin: 0 0 14px;"><strong>What happens next:</strong> I'll go through your answers before our call, where we'll dig deeper into anything I need more detail on, including training history and medical background.</p>
      <p style="margin: 18px 0 0;">Talk soon,<br />Kaylie<br />Lepley Nutrition</p>
    </div>
  `;

  return {
    subject: INTAKE_RECEIVED_EMAIL_SUBJECT,
    html
  };
}
