# Mitsunee

<p align="center">
  <img src="https://github.com/Mitsunee/mitsuwww/raw/main/assets/logo.svg" alt="Mitsunee" width="480px">
</p>

Repository for https://www.mitsunee.com

## Development Setup

This project uses [Vite] with [vite-plugin-ssr] for the frontend and PHP for backend services.

### Frontend

_(Requirements: [Node.js], [Yarn 1.x])_

Install all dependencies and start the Development server:

```shell
yarn
yarn dev
```

There are git hooks in place to lint and format all staged files prior to committing. You can also run `yarn lint` or `yarn format` to run those checks across the entire project.

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

Delete or move the `vendor` directory if you have one for backend development. Then build the frontend and install production backend dependencies:

```shell
yarn
yarn build
ddev composer install --no-dev -o
```

You can now deploy the `dist` and `vendor` directories. Frontend dependencies are bundled.

## Todo

- Add `.env` instructions
- actually do backend stuff :)

[vite]: https://vitejs.dev/
[vite-plugin-ssr]: https://vite-plugin-ssr.com/
[ddev]: https://ddev.readthedocs.io/en/latest/
[node.js]: https://nodejs.org/en/
[yarn 1.x]: https://classic.yarnpkg.com/lang/en/
