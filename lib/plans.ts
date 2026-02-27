export type Plan = {
  id: "custom" | "support";
  name: string;
  price: string;
  features: string[];
  duration: string;
};

// Future Stripe integration goes here
export const plans: Plan[] = [
  {
    id: "custom",
    name: "Structured Plan",
    price: "$97",
    duration: "One-Time Personalized Build",
    features: [
      "Personalized calorie & macro targets based on height, weight, gender, activity level, and goals",
      "Built from current intake patterns (no aggressive crash cuts)",
      "Structured meal blueprint: 3-4 breakfast, 3-4 lunch, 3-4 dinner, and 3-4 snack options",
      "Pre-workout fueling ideas and post-workout recovery meal guidance",
      "Meals aligned with macro targets, built around foods you enjoy, whole-food focused with flexibility",
      "7-day grocery list organized by category",
      "Meal timing guidance with protein distribution and training/workday fueling structure",
      "Food substitution guide with macro-equivalent swaps and dining-out flexibility",
      "Open Q&A access (responses typically within 24-48 hours)"
    ]
  },
  {
    id: "support",
    name: "Custom Plan + Performance Support",
    price: "$147",
    duration: "Most Popular",
    features: [
      "Everything in the Structured Plan",
      "Priority messaging (questions answered within the hour during business hours)",
      "2 weeks of structured support with refinement based on scale trends, energy, performance, and digestion feedback",
      "Up to 2 macro adjustments based on real-time response with performance and recovery considered",
      "Progress evaluation framework: what to track, when to adjust calories, and clear next steps",
      "Bonus: Dining & Social Strategy Guide (restaurants, alcohol, travel, and event flexibility)"
    ]
  }
];

export function getPlanById(planId?: string) {
  if (!planId) return undefined;
  return plans.find((plan) => plan.id === planId);
}
