import { Flame } from "lucide-react";

function Logo({ size = "md" }) {
  const sizes = {
    sm: { box: "w-7 h-7", icon: 14, text: "text-base" },
    md: { box: "w-9 h-9", icon: 18, text: "text-xl" },
    lg: { box: "w-12 h-12", icon: 24, text: "text-2xl" },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${s.box} bg-blue-600 rounded-xl flex items-center justify-center shrink-0`}
      >
        <Flame size={s.icon} className="text-white" fill="white" />
      </div>
      <span className={`${s.text} font-bold text-gray-900 dark:text-white`}>
        Habit<span className="text-blue-600 dark:text-blue-400">Flow</span>
      </span>
    </div>
  );
}

export default Logo;
