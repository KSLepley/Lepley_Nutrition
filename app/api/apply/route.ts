import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ApplySubmission = {
  name: string;
  email: string;
  age: string;
  height: string;
  weight: string;
  activityLevel: string;
  goal: string;
  nutritionStruggle: string;
  selectedPlan: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidSubmission(payload: Partial<ApplySubmission>): payload is ApplySubmission {
  return Boolean(
    payload.name &&
      payload.email &&
      payload.age &&
      payload.height &&
      payload.weight &&
      payload.activityLevel &&
      payload.goal &&
      payload.nutritionStruggle &&
      payload.selectedPlan
  );
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY environment variable." }, { status: 500 });
  }

  const body = (await request.json()) as Partial<ApplySubmission>;

  if (!isValidSubmission(body)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <h2>New Nutrition Plan Application</h2>
    <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Age:</strong> ${escapeHtml(body.age)}</p>
    <p><strong>Height:</strong> ${escapeHtml(body.height)}</p>
    <p><strong>Weight:</strong> ${escapeHtml(body.weight)}</p>
    <p><strong>Activity level:</strong> ${escapeHtml(body.activityLevel)}</p>
    <p><strong>Goal:</strong> ${escapeHtml(body.goal)}</p>
    <p><strong>Biggest struggle:</strong> ${escapeHtml(body.nutritionStruggle)}</p>
    <p><strong>Selected plan:</strong> ${escapeHtml(body.selectedPlan)}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Lepley Nutrition <onboarding@resend.dev>",
      to: "kayoticknowledge@gmail.com",
      subject: "New Nutrition Plan Application",
      html
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
