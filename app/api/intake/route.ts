import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getIntakeReceivedEmailTemplate } from "@/lib/emails/intakeReceived";

export const runtime = "nodejs";

type IntakeSubmission = {
  // Basics & Contact
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  age: string;
  height: string;
  weight: string;
  occupation: string;
  // Goals & Motivation
  goal: string;
  goalWeight: string;
  targetDate: string;
  successDefinition: string;
  pastObstacles: string;
  motivation: string;
  groceryBudget: string;
  // Training & Activity
  trainingTypes: string[];
  trainingTypesOther: string;
  trainingDays: string;
  workoutTime: string;
  dailySteps: string;
  gymAccess: string;
  cardioRoutine: string;
  recoveryTime: string;
  sleepHours: string;
  // Eating Patterns & Preferences
  mealsPerDay: string;
  typicalWeekday: string;
  snacking: string;
  trackingMacros: string;
  foodAllergiesRestrictions: string;
  favoriteFoods: string;
  digestiveIssues: string;
  eatingOutFrequency: string;
  alcohol: string;
  // Cooking, Logistics & Anything Else
  cookingConfidence: string;
  mealPrep: string;
  kitchenAccess: string;
  checkinCadence: string;
  communicationChannel: string;
  quitTriggers: string;
  anythingElse: string;
};

const requiredFields: (keyof IntakeSubmission)[] = [
  "name",
  "email",
  "phone",
  "age",
  "height",
  "weight",
  "goal",
  "successDefinition",
  "motivation",
  "trainingDays",
  "gymAccess",
  "sleepHours",
  "mealsPerDay",
  "trackingMacros",
  "foodAllergiesRestrictions",
  "cookingConfidence",
  "checkinCadence"
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeOrDash(value: string | undefined) {
  return value && value.trim() ? escapeHtml(value) : "—";
}

function isValidSubmission(payload: Partial<IntakeSubmission>): payload is IntakeSubmission {
  return requiredFields.every((field) => Boolean(payload[field]));
}

function row(label: string, value: string | undefined) {
  return `<p style="margin: 0 0 8px;"><strong>${label}:</strong> ${escapeOrDash(value)}</p>`;
}

function sectionHeading(title: string) {
  return `<h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 0.08em; color: #7a8c7a; border-bottom: 1px solid #e2ddd5; padding-bottom: 6px; margin: 24px 0 12px;">${title}</h2>`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY environment variable." }, { status: 500 });
  }

  const body = (await request.json()) as Partial<IntakeSubmission>;

  if (!isValidSubmission(body)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress = process.env.EMAIL_FROM ?? "Lepley Nutrition <onboarding@resend.dev>";
  const trainingTypes = Array.isArray(body.trainingTypes) ? body.trainingTypes.join(", ") : "";

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 680px; margin: 0 auto;">
      <h1 style="font-size: 22px; margin-bottom: 4px;">New Client Intake Submission</h1>
      <p style="margin: 0 0 12px; color: #6b7280;">${escapeHtml(body.name)}</p>

      ${sectionHeading("1. Client Stats")}
      ${row("Name", body.name)}
      ${row("Email", body.email)}
      ${row("Phone", body.phone)}
      ${row("Preferred contact method", body.preferredContact)}
      ${row("Age", body.age)}
      ${row("Height", body.height)}
      ${row("Weight", body.weight)}
      ${row("Occupation / schedule shape", body.occupation)}

      ${sectionHeading("2. Goals & Motivation")}
      ${row("Primary goal", body.goal)}
      ${row("Goal weight", body.goalWeight)}
      ${row("Target date / event", body.targetDate)}
      ${row("What success looks like (3mo / 6mo)", body.successDefinition)}
      ${row("What's gotten in the way before", body.pastObstacles)}
      ${row("Biggest motivation right now", body.motivation)}
      ${row("Weekly grocery budget", body.groceryBudget)}

      ${sectionHeading("3. Training & Activity")}
      ${row("Training types", trainingTypes)}
      ${row("Other training", body.trainingTypesOther)}
      ${row("Training days/week", body.trainingDays)}
      ${row("Morning or evening workouts", body.workoutTime)}
      ${row("Average daily steps", body.dailySteps)}
      ${row("Gym access", body.gymAccess)}
      ${row("Current cardio routine", body.cardioRoutine)}
      ${row("Recovery time after a hard session", body.recoveryTime)}
      ${row("Average sleep per night", body.sleepHours)}

      ${sectionHeading("4. Eating Patterns & Preferences")}
      ${row("Meals per day", body.mealsPerDay)}
      ${row("Typical weekday (wake time → meals)", body.typicalWeekday)}
      ${row("Snacking frequency", body.snacking)}
      ${row("Currently tracking macros/calories", body.trackingMacros)}
      ${row("Allergies / intolerances / foods avoided", body.foodAllergiesRestrictions)}
      ${row("Favorite foods", body.favoriteFoods)}
      ${row("Digestive issues", body.digestiveIssues)}
      ${row("Eating out frequency + spots", body.eatingOutFrequency)}
      ${row("Alcohol", body.alcohol)}

      ${sectionHeading("5. Cooking, Logistics & Anything Else")}
      ${row("Cooking confidence", body.cookingConfidence)}
      ${row("Meal prep habits", body.mealPrep)}
      ${row("Kitchen access / appliances", body.kitchenAccess)}
      ${row("Preferred check-in cadence", body.checkinCadence)}
      ${row("Preferred communication channel", body.communicationChannel)}
      ${row("What would make them quit a plan", body.quitTriggers)}
      ${row("Anything else", body.anythingElse)}
    </div>
  `;

  try {
    const { error: notifyError } = await resend.emails.send({
      from: fromAddress,
      to: "kayoticknowledge@gmail.com",
      subject: `New Client Intake: ${body.name}`,
      html
    });

    if (notifyError) {
      return NextResponse.json({ error: notifyError.message }, { status: 500 });
    }

    const confirmationEmail = getIntakeReceivedEmailTemplate({ clientName: body.name });

    await resend.emails.send({
      from: fromAddress,
      to: body.email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
