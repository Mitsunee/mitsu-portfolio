import cc from "classcat";
import styles from "./SocialsBar.module.css";

export function SocialsBar({ children }) {
  return <div id={styles.socials}>{children}</div>;
}

export function SocialsBarItem({
  src,
  hover,
  style = {},
  className,
  ...props
}) {
  const aStyle = {
    ...style,
    "--bg": `url("${src}")`
  };

  if (hover) aStyle["--hover"] = hover;

  return (
    <a {...props} className={cc([styles.item, className])} style={aStyle}>
      <div className={styles.inner}></div>
    </a>
  );
}
