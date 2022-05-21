import cc from "classcat";
import styles from "./ProjectsGrid.module.css";

export function ProjectsGrid({ children }) {
  return <section id={styles.grid}>{children}</section>;
}

export function ProjectsGridItem({
  children,
  title,
  titleIcon,
  href,
  style = {},
  className
}) {
  return (
    <div className={cc([className, styles.item])} style={style}>
      <h1>
        <a href={href}>
          {titleIcon && (
            <span
              className={styles.icon}
              style={{ "--bg": `url("${titleIcon}")` }}
              title={title}
            />
          )}
          {title}
        </a>
      </h1>
      {children}
    </div>
  );
}
