import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo size="sm" />
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} HabitFlow. Built for a better you.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
