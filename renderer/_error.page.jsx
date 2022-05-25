import { Section } from "./Section";
import { Headline } from "./Headline";

export function Page({ is404 }) {
  return (
    <Section>
      {is404 ? (
        <>
          <Headline>404 Page Not Found</Headline>
          <p>This page could not be found.</p>
        </>
      ) : (
        <>
          <Headline>500 Internal Server Error</Headline>
          <p>Something went wrong.</p>
        </>
      )}
    </Section>
  );
}

export const documentProps = {
  title: "Error",
  description: "An Error has occurred",
  noRobots: true
};
