import { Counter } from "./Counter";
import { ProjectsGrid, ProjectsGridItem } from "./ProjectsGrid";
import styles from "./index.module.css";

export function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <ProjectsGrid>
        <ProjectsGridItem
          title="FGO Timers"
          href="https://fgo.mitsunee.com"
          style={{
            backgroundImage: "radial-gradient(ellipse at top, #2e627a, #2e2c6a)"
          }}>
          Event timers and game information for Fate/Grand Order.
        </ProjectsGridItem>
        <ProjectsGridItem
          title="Modern Diacritics"
          href="https://www.npmjs.com/package/modern-diacritics"
          style={{
            backgroundImage: "linear-gradient(90deg, #1b7626, #cf43b7)"
          }}>
          A modern way to latinize/ascii-fold strings and normalize symbols.
          Available on{" "}
          <a href="https://www.npmjs.com/package/modern-diacritics">npm</a> and
          opensource on{" "}
          <a href="https://github.com/Mitsunee/modern-diacritics">Github</a>.
        </ProjectsGridItem>
        <ProjectsGridItem
          title="Pokemon Gen3 Damage Calculator"
          href="https://www.mitsunee.com/gen3dmgcalc"
          className={styles.pkmn}>
          Damage calculator for the &quot;Generation 3&quot; Pokemon games for
          GBA and Gamecube.
        </ProjectsGridItem>
      </ProjectsGrid>
    </>
  );
}
