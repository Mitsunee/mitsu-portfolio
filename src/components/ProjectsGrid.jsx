import cc from "classcat";
import { Section } from "~/components/Section";
import { Headline } from "~/components/Headline";
import styles from "./ProjectsGrid.module.css";

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
