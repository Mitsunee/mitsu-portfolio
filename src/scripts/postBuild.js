import { load } from "cheerio";
import {
  readFile,
  writeFile,
  dirExists,
  fileExists
} from "@foxkit/node-util/fs";
import { getFileName } from "@foxkit/node-util/path";
import { die, log } from "@foxkit/node-util/log";
import { globby } from "globby";
import { rm, rename } from "fs/promises";
import { rehype } from "rehype";
import rehypeMinify from "rehype-preset-minify";

const minify = rehype()
  .use(rehypeMinify)
  .data("settings", { quote: '"', upperDoctype: true, preferUnquoted: false });

async function processHtml(filePath) {
  const rawContent = await readFile(filePath);

  // process
  const $ = load(rawContent);
  $("link[rel='preload'][href$='.svg']").remove();
  $("a[target]").attr("rel", "noopener noreferrer");
  const { value } = await minify.process($.html());

  // write
  await writeFile(filePath, value);
  log.success(`Processed ${getFileName(filePath)}`);
}

(async function main() {
  log.warn("Script has not been migrating yet");
  process.exit(0);

  if (!(await dirExists("./dist"))) {
    die("No build found. Please run 'yarn build'");
  }

  if (!(await fileExists("./dist/client/manifest.json"))) {
    die("Current build was already processed");
  }

  // Process HTML files
  const [htmlFiles, publicFiles] = await Promise.all([
    globby("dist/client/**/*.html"),
    globby("public")
  ]);
  const isInPublic = filePath =>
    publicFiles.includes(`public/${filePath.slice(12)}`);
  await Promise.all(
    htmlFiles.filter(file => !isInPublic(file)).map(file => processHtml(file))
  );

  // Move folders
  await rename("dist/client", "._tmp_dist");
  await rm("dist", { force: true, recursive: true });
  await rename("._tmp_dist", "dist");

  // Cleanup build artifacts
  await Promise.all([
    rm("dist/manifest.json"),
    rm("dist/vite-plugin-ssr.json"),
    rm("dist/index.pageContext.json")
  ]);

  if (!(await dirExists("vendor"))) {
    log.warn(
      `No vendor directory exists.\nFor a production build please also run 'ddev composer install --no-dev -o'\nFor backend development please run 'ddev composer install && ddev start'`
    );
  }
})();
