import styles from "./SocialsBar.module.css";

export function SocialsBar({ children }) {
  return <div id={styles.socials}>{children}</div>;
}

export function SocialsBarItem({ src, href, title, hover = false }) {
  const style = {
    "--bg": `url("${src}")`
  };

  if (hover) style["--hover"] = hover;

  return (
    <a href={href} title={title} className={styles.item} style={style}>
      <div className={styles.inner}></div>
    </a>
  );
}
