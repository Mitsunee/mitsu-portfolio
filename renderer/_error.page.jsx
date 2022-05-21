import { Headline } from "./Headline";

export function Page({ is404 }) {
  return (
    <section className="content-wrapper">
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
    </section>
  );
}

export const documentProps = {
  title: "Error",
  description: "An Error has occurred",
  noRobots: true
};
