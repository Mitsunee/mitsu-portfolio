import { PageContextProvider } from "./usePageContext";
import "./PageShell.css";
import { Link } from "./Link";

const Layout = function ({ children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "min(90vw, 1200px)",
        margin: "auto"
      }}>
      {children}
    </div>
  );
};

const Sidebar = function ({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em"
      }}>
      {children}
    </div>
  );
};

const Content = function ({ children }) {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid var(--dark)",
        minHeight: "100vh",
        width: "100%"
      }}>
      {children}
    </div>
  );
};

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}>
      <a href="/">
        <img src="/assets/icons/icon.svg" height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

export const PageShell = function ({ children, pageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>
        <Sidebar>
          <Logo />
          <Link className="navitem" href="/">
            Home
          </Link>
          <Link className="navitem" href="/about">
            About
          </Link>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </PageContextProvider>
  );
};
