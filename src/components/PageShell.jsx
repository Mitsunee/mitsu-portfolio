import { PageContextProvider } from "./usePageContext";
import "./app.css";

const Header = function () {
  return (
    <header>
      <a href="/" title="Mitsunee">
        <img src="/assets/icons/icon.svg" alt="Mitsunee" />
      </a>
    </header>
  );
};

const Content = function ({ children }) {
  return <main id="content">{children}</main>;
};

export const PageShell = function ({ children, pageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Header />
      <Content>{children}</Content>
    </PageContextProvider>
  );
};
