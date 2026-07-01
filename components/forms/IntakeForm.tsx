"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type IntakeFormData = {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  age: string;
  height: string;
  weight: string;
  occupation: string;

  goal: string;
  goalWeight: string;
  targetDate: string;
  successDefinition: string;
  pastObstacles: string;
  motivation: string;
  groceryBudget: string;

  trainingTypes: string[];
  trainingTypesOther: string;
  trainingDays: string;
  workoutTime: string;
  dailySteps: string;
  gymAccess: string;
  cardioRoutine: string;
  recoveryTime: string;
  sleepHours: string;

  mealsPerDay: string;
  typicalWeekday: string;
  snacking: string;
  trackingMacros: string;
  foodAllergiesRestrictions: string;
  favoriteFoods: string;
  digestiveIssues: string;
  eatingOutFrequency: string;
  alcohol: string;

  cookingConfidence: string;
  mealPrep: string;
  kitchenAccess: string;
  checkinCadence: string;
  communicationChannel: string;
  quitTriggers: string;
  anythingElse: string;
};

const initialFormData: IntakeFormData = {
  name: "",
  email: "",
  phone: "",
  preferredContact: "",
  age: "",
  height: "",
  weight: "",
  occupation: "",

  goal: "",
  goalWeight: "",
  targetDate: "",
  successDefinition: "",
  pastObstacles: "",
  motivation: "",
  groceryBudget: "",

  trainingTypes: [],
  trainingTypesOther: "",
  trainingDays: "",
  workoutTime: "",
  dailySteps: "",
  gymAccess: "",
  cardioRoutine: "",
  recoveryTime: "",
  sleepHours: "",

  mealsPerDay: "",
  typicalWeekday: "",
  snacking: "",
  trackingMacros: "",
  foodAllergiesRestrictions: "",
  favoriteFoods: "",
  digestiveIssues: "",
  eatingOutFrequency: "",
  alcohol: "",

  cookingConfidence: "",
  mealPrep: "",
  kitchenAccess: "",
  checkinCadence: "",
  communicationChannel: "",
  quitTriggers: "",
  anythingElse: ""
};

const stepTitles = [
  "Basics & Contact",
  "Goals & Motivation",
  "Training & Activity",
  "Eating Patterns & Preferences",
  "Cooking, Logistics & Anything Else"
];

const stepRequiredFields: (keyof IntakeFormData)[][] = [
  ["name", "email", "phone", "age", "height", "weight"],
  ["goal", "successDefinition", "motivation"],
  ["trainingDays", "gymAccess", "sleepHours"],
  ["mealsPerDay", "trackingMacros", "foodAllergiesRestrictions"],
  ["cookingConfidence", "checkinCadence"]
];

const inputClasses =
  "mt-2 w-full rounded-xl border border-beige bg-ivory px-4 py-3 text-sm focus:border-sage focus:outline-none";

function TextField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  required = false,
  rows = 3,
  hint
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
  hint?: string;
}) {
  return (
    <label className="text-sm font-medium text-ink md:col-span-2">
      {label}
      {hint ? <p className="mt-1 text-xs font-normal text-muted">{hint}</p> : null}
      <textarea
        required={required}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClasses}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="text-sm font-medium text-ink">
      {label}
      <select required={required} value={value} onChange={(event) => onChange(event.target.value)} className={inputClasses}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function RadioGroupField({
  legend,
  name,
  value,
  onChange,
  options
}: {
  legend: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 border-beige text-ink focus:ring-sage"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroupField({
  legend,
  values,
  onToggle,
  options
}: {
  legend: string;
  values: string[];
  onToggle: (option: string) => void;
  options: string[];
}) {
  return (
    <fieldset className="md:col-span-2">
      <legend className="text-sm font-medium text-ink">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={values.includes(option)}
              onChange={() => onToggle(option)}
              className="h-4 w-4 border-beige text-ink focus:ring-sage"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function IntakeForm() {
  const [formData, setFormData] = useState<IntakeFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function setField<K extends keyof IntakeFormData>(field: K, value: IntakeFormData[K]) {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  function toggleTrainingType(option: string) {
    setFormData((previous) => ({
      ...previous,
      trainingTypes: previous.trainingTypes.includes(option)
        ? previous.trainingTypes.filter((item) => item !== option)
        : [...previous.trainingTypes, option]
    }));
  }

  function validateStep(step: number) {
    const missing = stepRequiredFields[step].some((field) => !formData[field]);
    return !missing;
  }

  function handleNext() {
    if (!validateStep(currentStep)) {
      setStepError("Please fill out all required fields before continuing.");
      return;
    }
    setStepError(null);
    setCurrentStep((step) => Math.min(step + 1, stepTitles.length - 1));
  }

  function handleBack() {
    setStepError(null);
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const allValid = stepRequiredFields.every((_, step) => validateStep(step));
    if (!allValid) {
      setStepError("Please fill out all required fields before submitting.");
      return;
    }

    if (!termsAccepted) {
      setTermsError("You must agree to the Terms & Conditions before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setTermsError(null);
    setStepError(null);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit intake form");
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
      setTermsAccepted(false);
      setCurrentStep(0);
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isLastStep = currentStep === stepTitles.length - 1;

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-sage/50 bg-sage/20 p-6 md:p-8">
        <p className="text-sm text-ink">
          Your intake has been received. I&rsquo;ll review it before our call and reach out to schedule a time.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-beige bg-white/40 p-6 md:p-8">
      <div className="mb-8 flex items-center gap-2">
        {stepTitles.map((title, index) => (
          <div key={title} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                index === currentStep
                  ? "bg-ink text-ivory"
                  : index < currentStep
                    ? "bg-sage text-ink"
                    : "border border-beige bg-ivory text-muted"
              }`}
            >
              {index + 1}
            </div>
            {index < stepTitles.length - 1 ? <div className="h-px flex-1 bg-beige" /> : null}
          </div>
        ))}
      </div>
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Step {currentStep + 1} of {stepTitles.length}: {stepTitles[currentStep]}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          {currentStep === 0 ? (
            <>
              <TextField label="Full name" value={formData.name} onChange={(value) => setField("name", value)} required />
              <TextField label="Email" type="email" value={formData.email} onChange={(value) => setField("email", value)} required />
              <TextField
                label="Phone"
                type="tel"
                placeholder="e.g. (555) 123-4567"
                value={formData.phone}
                onChange={(value) => setField("phone", value)}
                required
              />
              <SelectField
                label="Preferred contact method"
                value={formData.preferredContact}
                onChange={(value) => setField("preferredContact", value)}
                options={["Email", "Phone call", "Text"]}
              />
              <TextField label="Age" type="number" value={formData.age} onChange={(value) => setField("age", value)} required />
              <TextField
                label="Height"
                placeholder={"e.g. 5'7\""}
                value={formData.height}
                onChange={(value) => setField("height", value)}
                required
              />
              <TextField
                label="Current weight"
                placeholder="e.g. 155 lbs"
                value={formData.weight}
                onChange={(value) => setField("weight", value)}
                required
              />
              <TextField
                label="Occupation / typical work hours"
                value={formData.occupation}
                onChange={(value) => setField("occupation", value)}
              />
            </>
          ) : null}

          {currentStep === 1 ? (
            <>
              <SelectField
                label="Primary goal"
                value={formData.goal}
                onChange={(value) => setField("goal", value)}
                options={["Fat loss", "Muscle gain", "Recomposition", "Improve energy / health", "Other"]}
                required
              />
              <TextField label="Goal weight (if any)" value={formData.goalWeight} onChange={(value) => setField("goalWeight", value)} />
              <TextField
                label="Target date or event"
                placeholder="Wedding, vacation, season start, etc."
                value={formData.targetDate}
                onChange={(value) => setField("targetDate", value)}
              />
              <TextField
                label="Weekly grocery budget"
                value={formData.groceryBudget}
                onChange={(value) => setField("groceryBudget", value)}
              />
              <TextAreaField
                label="What does success look like at 3 months? At 6 months?"
                value={formData.successDefinition}
                onChange={(value) => setField("successDefinition", value)}
                required
              />
              <TextAreaField
                label="What's gotten in the way before?"
                value={formData.pastObstacles}
                onChange={(value) => setField("pastObstacles", value)}
              />
              <TextAreaField
                label="What's your biggest motivation right now?"
                value={formData.motivation}
                onChange={(value) => setField("motivation", value)}
                required
              />
            </>
          ) : null}

          {currentStep === 2 ? (
            <>
              <CheckboxGroupField
                legend="What type of training do you do?"
                values={formData.trainingTypes}
                onToggle={toggleTrainingType}
                options={["Weight training", "Cardio", "HIIT", "Sports", "Pilates / yoga"]}
              />
              <TextField
                label="Other training (optional)"
                value={formData.trainingTypesOther}
                onChange={(value) => setField("trainingTypesOther", value)}
              />
              <TextField
                label="Training days per week"
                value={formData.trainingDays}
                onChange={(value) => setField("trainingDays", value)}
                required
              />
              <RadioGroupField
                legend="Morning or evening workouts?"
                name="workoutTime"
                value={formData.workoutTime}
                onChange={(value) => setField("workoutTime", value)}
                options={["Morning", "Evening", "Varies"]}
              />
              <TextField
                label="Average daily steps"
                value={formData.dailySteps}
                onChange={(value) => setField("dailySteps", value)}
              />
              <RadioGroupField
                legend="Gym access"
                name="gymAccess"
                value={formData.gymAccess}
                onChange={(value) => setField("gymAccess", value)}
                options={["Gym", "Home gym", "Both"]}
              />
              <TextAreaField
                label="Current cardio routine (type, how often, how long)"
                value={formData.cardioRoutine}
                onChange={(value) => setField("cardioRoutine", value)}
              />
              <TextField
                label="How long to recover from a hard session?"
                value={formData.recoveryTime}
                onChange={(value) => setField("recoveryTime", value)}
              />
              <TextField
                label="Average sleep per night"
                value={formData.sleepHours}
                onChange={(value) => setField("sleepHours", value)}
                required
              />
            </>
          ) : null}

          {currentStep === 3 ? (
            <>
              <TextField
                label="Meals per day (typical)"
                value={formData.mealsPerDay}
                onChange={(value) => setField("mealsPerDay", value)}
                required
              />
              <RadioGroupField
                legend="Do you snack a lot?"
                name="snacking"
                value={formData.snacking}
                onChange={(value) => setField("snacking", value)}
                options={["Yes", "Sometimes", "Rarely"]}
              />
              <RadioGroupField
                legend="Currently tracking macros or calories?"
                name="trackingMacros"
                value={formData.trackingMacros}
                onChange={(value) => setField("trackingMacros", value)}
                options={["Yes", "No", "Used to"]}
              />
              <TextField
                label="How often do you eat out per week?"
                value={formData.eatingOutFrequency}
                onChange={(value) => setField("eatingOutFrequency", value)}
              />
              <TextAreaField
                label="Walk me through a typical weekday: wake time, then every meal/snack with timing"
                value={formData.typicalWeekday}
                onChange={(value) => setField("typicalWeekday", value)}
              />
              <TextAreaField
                label="Allergies, intolerances, or foods you avoid"
                value={formData.foodAllergiesRestrictions}
                onChange={(value) => setField("foodAllergiesRestrictions", value)}
                required
              />
              <TextAreaField
                label="Favorite foods (proteins, carbs, snacks — be specific)"
                value={formData.favoriteFoods}
                onChange={(value) => setField("favoriteFoods", value)}
              />
              <TextAreaField
                label="Any digestive issues? (bloating, IBS, reflux, etc.)"
                hint="High level is fine, we'll go deeper on our call if needed."
                value={formData.digestiveIssues}
                onChange={(value) => setField("digestiveIssues", value)}
              />
              <TextField label="Alcohol (type, frequency)" value={formData.alcohol} onChange={(value) => setField("alcohol", value)} />
            </>
          ) : null}

          {currentStep === 4 ? (
            <>
              <RadioGroupField
                legend="Cooking confidence"
                name="cookingConfidence"
                value={formData.cookingConfidence}
                onChange={(value) => setField("cookingConfidence", value)}
                options={["Beginner", "Comfortable", "Confident"]}
              />
              <RadioGroupField
                legend="Do you meal prep?"
                name="mealPrep"
                value={formData.mealPrep}
                onChange={(value) => setField("mealPrep", value)}
                options={["Yes", "Sometimes", "No"]}
              />
              <TextAreaField
                label="Kitchen access & appliances"
                value={formData.kitchenAccess}
                onChange={(value) => setField("kitchenAccess", value)}
              />
              <RadioGroupField
                legend="Preferred check-in cadence"
                name="checkinCadence"
                value={formData.checkinCadence}
                onChange={(value) => setField("checkinCadence", value)}
                options={["Weekly", "Biweekly", "Monthly"]}
              />
              <TextField
                label="Preferred communication channel"
                placeholder="Text, email, Voxer, etc."
                value={formData.communicationChannel}
                onChange={(value) => setField("communicationChannel", value)}
              />
              <TextAreaField
                label="What would make you quit a plan?"
                value={formData.quitTriggers}
                onChange={(value) => setField("quitTriggers", value)}
              />
              <TextAreaField
                label="Anything else about your life, habits, or goals that would help me build a better plan for you?"
                value={formData.anythingElse}
                onChange={(value) => setField("anythingElse", value)}
                rows={4}
              />
            </>
          ) : null}
        </div>

        {stepError ? <p className="text-xs text-red-700">{stepError}</p> : null}

        {isLastStep ? (
          <div>
            <label className="inline-flex items-start gap-3 text-sm leading-relaxed text-ink">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => {
                  setTermsAccepted(event.target.checked);
                  if (event.target.checked) setTermsError(null);
                }}
                className="mt-1 h-4 w-4 border-beige text-ink focus:ring-sage"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="font-semibold underline underline-offset-4">
                  Terms &amp; Conditions
                </Link>{" "}
                and understand this service does not provide medical advice.
              </span>
            </label>
            {termsError ? <p className="mt-2 text-xs text-red-700">{termsError}</p> : null}
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <Button type="button" variant="secondary" onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>

          {isLastStep ? (
            <Button key="submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Intake"}
            </Button>
          ) : (
            <Button key="next" type="button" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>

        {submitError ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>
        ) : null}
      </form>
    </div>
  );
}
