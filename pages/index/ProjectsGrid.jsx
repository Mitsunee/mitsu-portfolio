import cc from "classcat";
import styles from "./ProjectsGrid.module.css";
import { Section } from "../../renderer/Section";
import { Headline } from "../../renderer/Headline";

export function ProjectsGrid({ children }) {
  return (
    <Section>
      <Headline>My Projects</Headline>
      <div id={styles.grid}>{children}</div>
    </Section>
  );
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
    <article className={cc([className, styles.item])} style={style}>
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
    </article>
  );
}
