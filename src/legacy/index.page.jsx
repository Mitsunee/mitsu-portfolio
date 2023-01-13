import webIconUrl from "iconoir/icons/internet.svg";
import devIconUrl from "iconoir/icons/code-brackets-square.svg";
import { Headline } from "~/components/Headline";
import { Section, Columns } from "~/components/Section";
import { ProjectsGrid, ProjectsGridItem } from "~/components/ProjectsGrid";
import { FavoritesGrid, FavoritesGridItem } from "~/components/FavoritesGrid";
import { Email } from "~/components/Email";
import styles from "./index.module.css";

const nierImageUrl = "/assets/favorites/nier-automata.jpg";
const suzukaImageUrl = "/assets/favorites/suzuka.jpg";
const morsImageUrl = "/assets/favorites/mors.jpg";
const belakorImageUrl = "/assets/favorites/belakor.jpg";
const tmglImageUrl = "/assets/favorites/tmgl.png";

export function Page() {
  return (
    <>
      <Columns>
        <Section>
          <Headline>About me</Headline>
          <p>
            I'm a web developer from Germany who's been tinkering with web
            technologies since childhood. I learned PHP through a friend in
            school and switched to mainly JavaScript in 2016, learning about
            Node.js in 2019 after switching to Linux as my OS of choice.
          </p>
          <p>
            In my freetime my focus is on providing useful apps related to my
            hobbies (like Gacha games) and contributing to open source
            development. I have also been working as a freelancer in frontend
            development since early 2021.
          </p>
          <h2>Technology I use</h2>
          <ul className={styles.taglist}>
            <li>HTML5 / CSS3 / Javascript (ES2021) / TypeScript</li>
            <li>React/Next.js (Fullstack apps)</li>
            <li>Preact/Vite (Static Sites)</li>
            <li>PostCSS</li>
            <li>Github Actions</li>
            <li>Linux (Ubuntu, CentOS)</li>
          </ul>
          <div id={styles.cta}>
            Want to know my skills in more detail? There's a full list of tech I
            have learned or am currently learning on{" "}
            <a
              href="https://trello.com/b/Btyu4S9s/tech-coding"
              target="_blank"
              rel="noopener noreferrer">
              Trello
            </a>
            .<br />
            <br />
            You can contact my on social media or via <Email />!
          </div>
        </Section>
        <ProjectsGrid>
          <ProjectsGridItem
            title="FGO Timers"
            titleIcon={webIconUrl}
            href="https://fgo.mitsunee.com"
            className={styles.fgo}>
            Event timers and game information for Fate/Grand Order.
          </ProjectsGridItem>
          <ProjectsGridItem
            title="Mitsunee | Blog"
            titleIcon={webIconUrl}
            href="https://blog.mitsunee.com/"
            className={styles.blog}>
            My personal blog where I post guides and rants about my hobbies,
            Linux, tech, coding and games.
          </ProjectsGridItem>
          <ProjectsGridItem
            title="Modern Diacritics"
            titleIcon={devIconUrl}
            href="https://www.npmjs.com/package/modern-diacritics"
            className={styles.mdrn}>
            A modern way to latinize/ascii-fold strings and normalize symbols.
            Available on{" "}
            <a href="https://www.npmjs.com/package/modern-diacritics">npm</a>{" "}
            and opensource on{" "}
            <a href="https://github.com/Mitsunee/modern-diacritics">Github</a>.
          </ProjectsGridItem>
          <ProjectsGridItem
            title="Pokemon Gen3 Damage Calculator"
            titleIcon={webIconUrl}
            href="https://www.mitsunee.com/gen3dmgcalc"
            className={styles.pkmn}>
            Damage calculator for the &quot;Generation 3&quot; Pokemon games for
            GBA and Gamecube.
          </ProjectsGridItem>
          <ProjectsGridItem
            title="Foxkit"
            titleIcon={devIconUrl}
            href="https://github.com/mitsunee/foxkit"
            className={styles.fxkt}>
            Collection of Configs and modules to reduce copypasting between my
            projects as well as providing known good versions of common modules
            (like sorting algorithms and parsing data files)
          </ProjectsGridItem>
        </ProjectsGrid>
      </Columns>
      <FavoritesGrid>
        <FavoritesGridItem
          type="Game"
          src={nierImageUrl}
          name="NieR Automata"
          from="Square Enix"
        />
        <FavoritesGridItem
          type="Character"
          src={suzukaImageUrl}
          name="Suzuka Gozen"
          from="Fate/Grand Order"
        />
        <FavoritesGridItem
          type="Esport"
          src={tmglImageUrl}
          name="Trackmania Grand League"
          from="Ubisoft Nadeo"
        />
        <FavoritesGridItem
          type="Metal Band"
          src={morsImageUrl}
          name="Mors Principium Est"
        />
        <FavoritesGridItem
          type="Metal Band"
          src={belakorImageUrl}
          name="Be'lakor"
        />
      </FavoritesGrid>
    </>
  );
}
