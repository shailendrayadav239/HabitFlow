function Hero({ onGetStarted }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
      {/* Badge */}
      <div className="bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100 dark:border-blue-900">
        🌊 Build habits that last
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
        Track Your Habits,{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Transform Your Life
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
        HabitFlow helps you build positive habits, track daily progress,
        maintain streaks, and stay motivated with AI-powered coaching.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition shadow-lg shadow-blue-200 dark:shadow-none"
        >
          Get Started — It's Free 🚀
        </button>
        <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          See How It Works
        </button>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {[
          "✅ Daily Habit Tracking",
          "🔥 Streak Counter",
          "📅 7-Day Calendar",
          "🤖 AI Habit Coach",
          "🔐 Private & Secure",
        ].map((feature) => (
          <span
            key={feature}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm px-4 py-2 rounded-full shadow-sm"
          >
            {feature}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
