import { useStore } from "@nanostores/preact";
import cc from "classcat";
import moonIcon from "iconoir/icons/half-moon.svg";
import minusIcon from "iconoir/icons/minus.svg";
import sunIcon from "iconoir/icons/sun-light.svg";
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
        <div
          className={styles.icon}
          style={{ "--bg": `url(${sunIcon.src})` }}></div>
      </button>
      <button
        type="button"
        className={cc(["button", currentTheme === null && "active"])}
        aria-label="Choose System Theme"
        onClick={() => $theme.set(null)}>
        <div
          className={styles.icon}
          style={{ "--bg": `url(${minusIcon.src})` }}></div>
      </button>
      <button
        type="button"
        className={cc(["button", currentTheme == "dark" && "active"])}
        aria-label="Choose Dark Theme"
        onClick={() => $theme.set("dark")}>
        <div
          className={styles.icon}
          style={{ "--bg": `url(${moonIcon.src})` }}></div>
      </button>
    </div>
  );
}
