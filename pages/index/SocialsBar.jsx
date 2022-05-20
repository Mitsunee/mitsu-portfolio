import styles from "./SocialsBar.module.css";

export function SocialsBar({ children }) {
  return <div id={styles.socials}>{children}</div>;
}

export function SocialsBarItem({ src, hover = false }) {
  const style = {
    "--bg": `url("${src}")`
  };

  if (hover) style["--hover"] = hover;

  return (
    <div className={styles.item} style={style}>
      <div className={styles.inner}></div>
    </div>
  );
}
