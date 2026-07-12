import {
  CheckCircle2,
  Flame,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Daily Tracking",
    desc: "Log your habits in one tap and see your progress update instantly.",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950",
  },
  {
    icon: Flame,
    title: "Streak Counter",
    desc: "Stay motivated by watching your streak grow day after day.",
    color: "text-orange-500 bg-orange-50 dark:bg-orange-950",
  },
  {
    icon: CalendarDays,
    title: "7-Day Calendar",
    desc: "Visualize your consistency at a glance with a weekly overview.",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950",
  },
  {
    icon: Sparkles,
    title: "AI Habit Coach",
    desc: "Get personalised, motivational tips powered by AI.",
    color: "text-pink-600 bg-pink-50 dark:bg-pink-950",
  },
  {
    icon: TrendingUp,
    title: "Progress Insights",
    desc: "Track completion status — pending, in progress, or done.",
    color: "text-green-600 bg-green-50 dark:bg-green-950",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    desc: "Your habits are yours — protected behind secure authentication.",
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950",
  },
];

function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Everything you need to build better habits
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Simple tools, real motivation, and a little help from AI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.color}`}
              >
                <Icon size={20} />
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-1.5">
                {f.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureGrid;
