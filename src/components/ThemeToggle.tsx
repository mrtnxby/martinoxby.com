import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <div className={styles.themeToggleContainer}>
      <button
        type="button"
        className={styles.themeToggleButton}
        onClick={() => setActiveTheme(inactiveTheme)}
      >
        <span
          className={`${styles.themeToggleThumb} ${
            activeTheme === "dark" ? styles.dark : styles.light
          }`}
        />
        <span>🌙</span>
        <span>☀️</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
