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
import { Headline } from "../../renderer/Headline";
import { Section, Columns } from "../../renderer/Section";
import { SocialsBar, SocialsBarItem } from "./SocialsBar";
import { ProjectsGrid, ProjectsGridItem } from "./ProjectsGrid";
import { FavoritesGrid, FavoritesGridItem } from "./FavoritesGrid";
import { Email } from "./Email";
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
