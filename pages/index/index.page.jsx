import githubIconUrl from "iconoir/icons/github.svg";
import twitterIconUrl from "iconoir/icons/twitter.svg";
import youtubeIconUrl from "iconoir/icons/youtube.svg";
import discordIconUrl from "iconoir/icons/discord.svg";
import webIconUrl from "iconoir/icons/internet.svg";
import devIconUrl from "iconoir/icons/code-brackets-square.svg";
import steamIconUrl from "../../assets/icons/steam.svg";
import nierImageUrl from "../../assets/favorites/nier-automata.jpg";
import suzukaImageUrl from "../../assets/favorites/suzuka.jpg";
import morsImageUrl from "../../assets/favorites/mors.jpg";
import belakorImageUrl from "../../assets/favorites/belakor.jpg";
import tmglImageUrl from "../../assets/favorites/tmgl.png";
//import { Headline } from "../../renderer/Headline";
import { Section } from "../../renderer/Section";
import { SocialsBar, SocialsBarItem } from "./SocialsBar";
import { ProjectsGrid, ProjectsGridItem } from "./ProjectsGrid";
import { FavoritesGrid, FavoritesGridItem } from "./FavoritesGrid";
import styles from "./index.module.css";

export function Page() {
  return (
    <>
      <Section>
        <img
          src="../../assets/logo.svg"
          alt="Mitsunee"
          className={styles.logo}
        />
        <p>
          Freelance Web Developer | Open Source Developer and Contributor |
          Sometimes Translation Volunteer
        </p>
      </Section>
      <SocialsBar>
        <SocialsBarItem
          src={githubIconUrl}
          title="Github"
          href="https://github.com/Mitsunee"
        />
        <SocialsBarItem
          src={twitterIconUrl}
          hover="#1DA1F2"
          title="Twitter"
          href="https://twitter.com/Mitsunee"
        />
        <SocialsBarItem
          src={youtubeIconUrl}
          hover="red"
          title="YouTube"
          href="https://www.youtube.com/channel/UC0Yut3Dj47oaVMTlL_NM6IA"
        />
        <SocialsBarItem
          src={discordIconUrl}
          hover="#5865F2"
          title="Discord Server"
          href="https://discord.gg/ZncPkjw"
        />
        <SocialsBarItem
          src={steamIconUrl}
          title="Steam"
          href="https://steamcommunity.com/id/mitsunee/"
        />
      </SocialsBar>
      <ProjectsGrid>
        <ProjectsGridItem
          title="FGO Timers"
          titleIcon={webIconUrl}
          href="https://fgo.mitsunee.com"
          className={styles.fgo}>
          Event timers and game information for Fate/Grand Order.
        </ProjectsGridItem>
        <ProjectsGridItem
          title="Modern Diacritics"
          titleIcon={devIconUrl}
          href="https://www.npmjs.com/package/modern-diacritics"
          className={styles.mdrn}>
          A modern way to latinize/ascii-fold strings and normalize symbols.
          Available on{" "}
          <a href="https://www.npmjs.com/package/modern-diacritics">npm</a> and
          opensource on{" "}
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
      </ProjectsGrid>
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
