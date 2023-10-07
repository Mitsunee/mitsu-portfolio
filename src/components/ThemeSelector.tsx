import { useStore } from "@nanostores/preact";
import cc from "classcat";
import { HalfMoon, Minus, SunLight } from "iconoir-react";
import { $theme } from "~/stores/theme";
import styles from "./ThemeSelector.module.css";

export function ThemeSelector() {
  const currentTheme = useStore($theme);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={cc(["button", currentTheme == "light" && "active"])}
        aria-label="Choose Light Theme"
        onClick={() => $theme.set("light")}>
        <SunLight className={styles.icon} />
      </button>
      <button
        type="button"
        className={cc(["button", currentTheme === null && "active"])}
        aria-label="Choose System Theme"
        onClick={() => $theme.set(null)}>
        <Minus className={styles.icon} />
      </button>
      <button
        type="button"
        className={cc(["button", currentTheme == "dark" && "active"])}
        aria-label="Choose Dark Theme"
        onClick={() => $theme.set("dark")}>
        <HalfMoon className={styles.icon} />
      </button>
    </div>
  );
}
