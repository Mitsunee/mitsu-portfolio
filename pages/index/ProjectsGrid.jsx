import cc from "classcat";
import styles from "./ProjectsGrid.module.css";

export function ProjectsGrid({ children }) {
  return <section id={styles.grid}>{children}</section>;
}

export function ProjectsGridItem({
  children,
  title,
  href,
  style = {},
  className
}) {
  return (
    <div className={cc([className, styles.item])} style={style}>
      <h1>{href ? <a href={href}>{title}</a> : title}</h1>
      {children}
    </div>
  );
}
