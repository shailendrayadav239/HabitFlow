import { UserPlus, ListPlus, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create your account",
    desc: "Sign up in seconds — no credit card, no hassle.",
  },
  {
    icon: ListPlus,
    title: "Add your habits",
    desc: "Set daily or weekly habits with optional start and due dates.",
  },
  {
    icon: TrendingUp,
    title: "Track & grow",
    desc: "Check off each day, build your streak, and get AI coaching along the way.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            How HabitFlow works
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Three simple steps to a more consistent you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center relative">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 block">
                  STEP {i + 1}
                </span>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
