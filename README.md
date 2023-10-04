# Mitsunee

<p align="center">
  <img src="https://github.com/Mitsunee/mitsuwww/raw/main/src/assets/logo.svg" alt="Mitsunee" width="480px">
</p>

Repository for https://www.mitsunee.com

## Development Setup

This project uses [Astro] with [Preact] for interactive components.

Make sure you have [node.js] (version 16 or higher) and [pnpm] (version 8) installed. Install all dependencies and start the Development server:

```shell
pnpm install
./install-sharp.sh
pnpm dev
```

There are git hooks in place to format all staged files prior to committing. Please run `pnpm lint` prior to committing if your editor does not integrate ESLint. Github Actions will check formatting, lint and check types on each push.

## Testing

These are the same commands also run in CI on every push:

```shell
pnpm lint:strict
pnpm format:check
pnpm typecheck
```

<details>
<summary>Full list of commands</summary>

```shell
pnpm format # formats entire codebase
pnpm format:check # checks formatting on entire codebase
pnpm lint # standard lint check on entire codebase
pnpm lint:fix # standard lint check on entire codebase with autofix enabled
pnpm lint:strict # strict lint check on entire codebase
pnpm dev # start dev server
pnpm typecheck # run typechecks on entire codebase
pnpm build # create production build
```

</details>

## Production build

Simply run the build script:

```shell
pnpm build
```

[astro]: https://docs.astro.build/en/getting-started/
[preact]: https://preactjs.com/guide/v10/getting-started
[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
