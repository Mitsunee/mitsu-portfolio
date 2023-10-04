import cc from "classcat";
import type { JSX } from "preact/jsx-runtime";
import { Headline } from "~/components/Headline";
import { Section } from "~/components/Section";
import type { CC, WithChildren } from "~/types/HTMLProps";
import styles from "./FavoritesGrid.module.css";

export function FavoritesGrid({ children }: WithChildren) {
  return (
    <Section>
      <Headline>Favorites</Headline>
      <div id={styles.favorites}>{children}</div>
    </Section>
  );
}

interface FavoritesGridItemProps extends CC {
  src: string;
  name: string;
  from?: string;
  type: string;
  style?: JSX.CSSProperties;
}

export function FavoritesGridItem({
  src,
  name,
  from,
  type,
  className,
  style = {}
}: FavoritesGridItemProps) {
  return (
    <article className={cc([className, styles.item])} style={style}>
      <h1>{name}</h1>
      <img src={src} alt={name} title={name} loading="lazy" />
      {from && <h2>{from}</h2>}
      <h3>{type}</h3>
    </article>
  );
}
