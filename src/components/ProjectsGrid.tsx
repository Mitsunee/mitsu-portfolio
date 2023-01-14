import cc from "classcat";
import type { JSX } from "preact/jsx-runtime";
import { Section } from "~/components/Section";
import { Headline } from "~/components/Headline";
import type { CC, WithChildren } from "~/types/HTMLProps";
import styles from "./ProjectsGrid.module.css";

export function ProjectsGrid({ children }: WithChildren) {
  return (
    <Section>
      <Headline>My Projects</Headline>
      <div id={styles.grid}>{children}</div>
    </Section>
  );
}

interface ProjectsGridItemProps extends CC, WithChildren {
  title: string;
  titleIcon?: string;
  href: string;
  style?: JSX.CSSProperties;
}

export function ProjectsGridItem({
  children,
  title,
  titleIcon,
  href,
  style = {},
  className
}: ProjectsGridItemProps) {
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
