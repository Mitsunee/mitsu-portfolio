# Mitsunee

<p align="center">
  <img src="https://github.com/Mitsunee/mitsuwww/raw/main/src/assets/logo.svg" alt="Mitsunee" width="480px">
</p>

Repository for https://www.mitsunee.com

## Development Setup

This project uses [Astro] with [Preact] for the frontend and [PHP] for backend services (TBD).

### Frontend

_(Requirements: [Node.js], [Yarn 1.x])_

Install all dependencies and start the Development server:

```shell
yarn
yarn dev
```

There are git hooks in place to format all staged files prior to committing. Please run `yarn lint` prior to committing if your editor does not integrate ESLint. Github Actions will check formatting, lint and check types on each push.

### Backend

_(Requirements: [Node.js], [Yarn 1.x], Docker, [ddev])_

Build the frontend and install the backend dependencies, then start the preview server:

```shell
yarn
yarn build
ddev composer install
ddev start
```

The preview should now be available to you as https://mitsuwww.ddev.site

## Production build

_(Requirements: [Node.js], [Yarn 1.x], Docker, [ddev])_

Delete or move the `vendor` directory if you have one for backend development (`vendor.bak` is in `.gitignore`). Then build the frontend and install production backend dependencies:

```shell
yarn
yarn build
ddev composer install --no-dev -o
```

You can now deploy the `dist` and `vendor` directories. Frontend dependencies are bundled.

## Todo

- Add `.env` instructions
- actually do backend stuff :)

[astro]: https://docs.astro.build/en/getting-started/
[preact]: https://preactjs.com/guide/v10/getting-started
[php]: https://www.php.net
[ddev]: https://ddev.readthedocs.io/en/latest/
[node.js]: https://nodejs.org/en/
[yarn 1.x]: https://classic.yarnpkg.com/lang/en/
