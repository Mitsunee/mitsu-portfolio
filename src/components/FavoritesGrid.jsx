import cc from "classcat";
import styles from "./FavoritesGrid.module.css";
import { Section } from "../../renderer/Section";
import { Headline } from "../../renderer/Headline";

export function FavoritesGrid({ children }) {
  return (
    <Section>
      <Headline>Favorites</Headline>
      <div id={styles.favorites}>{children}</div>
    </Section>
  );
}

export function FavoritesGridItem({
  src,
  name,
  from,
  type,
  className,
  style = {}
}) {
  return (
    <article className={cc([className, styles.item])} style={style}>
      <h1>{name}</h1>
      <img src={src} alt={name} title={name} />
      {from && <h2>{from}</h2>}
      <h3>{type}</h3>
    </article>
  );
}
