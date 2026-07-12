import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
      <div className="bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100 dark:border-blue-900">
        Build habits that last
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
        Track Your Habits,{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Transform Your Life
        </span>
      </h1>

      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
        Build better habits every day. Stay consistent, track your streaks, and
        let your AI coach keep you on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/register")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition shadow-lg shadow-blue-200 dark:shadow-none"
        >
          Get Started
          <ArrowRight size={20} />
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          Sign In
        </button>
      </div>
    </section>
  );
}

export default Hero;
