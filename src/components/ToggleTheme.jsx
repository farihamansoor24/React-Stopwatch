import { useState,useEffect } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    // Use an functional update or an if/else block to reliably toggle state
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    // Apply the theme to the document body
    document.body.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <div>
      <button
        id="themeToggleBtn"
        aria-label="Toggle Theme"
        className="relative group px-5 py-2 rounded-2xl bg-amber-100/60 dark:bg-slate-900/80 border border-purple-300/80 dark:border-slate-700/60 hover:border-purple-600 dark:hover:border-cyan-400 transition-all duration-300 shadow-md"
        onClick={handleTheme}
      >
        <div className="flex items-center gap-2 text-xs font-bold text-purple-950 dark:text-slate-300 group-hover:text-purple-700 dark:group-hover:text-cyan-300">
          <i
            className={`text-purple-700 dark:text-fuchsia-400 text-sm ${
              theme === "light"
                ? "fa-solid fa-sun icon-sun"
                : "fa-solid fa-moon icon-moon"
            }`}
          ></i>
        </div>
      </button>
    </div>
  );
};

export default ToggleTheme;