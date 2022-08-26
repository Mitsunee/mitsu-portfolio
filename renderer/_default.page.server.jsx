import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import renderToString from "preact-render-to-string";
import { PageShell } from "./PageShell";
import { metaDefaults } from "./meta";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "documentProps"];

export async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = documentProps?.title || metaDefaults.title;
  const desc = documentProps?.description || metaDefaults.description;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/icons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${
          documentProps?.noRobots
            ? escapeInject`<meta name="robots" content="noindex" />\n        `
            : ""
        }<meta name="application-name" content="Mitsunee" />
        <meta property="og:site_name" content="Mitsunee" />

        <title>${title}</title>
        <meta property="og:title" content="${title}" />
        <meta name="twitter:title" content="${title}" />

        <meta name="description" content="${desc}" />
        <meta property="og:description" content="${desc}" />
        <meta name="twitter:description" content="${desc}" />

        <meta property="og:image" content="https://www.mitsunee.com/assets/icons/icon-192.png" />
        <meta name="twitter:image" content="https://www.mitsunee.com/assets/icons/icon-192.png" />

        <meta name="twitter:author" content="@Mitsunee"/>
        <meta name="theme-color" content="#ffbb5c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Lexend:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
