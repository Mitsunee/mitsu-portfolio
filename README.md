# Mitsunee

<p align="center">
  <img src="https://github.com/Mitsunee/mitsunee/raw/main/assets/logo.svg" alt="Mitsunee" width="480px">
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

Build the frontend and start ddev using the provided preview script:

```shell
yarn
yarn build

yarn preview
# or
ddev composer install && ddev start
```

The preview should now be available to you as https://mitsuwww.ddev.site

## Todo

- Add `.env` instructions
- Postbuild script
- actually do backend stuff :)

[vite]: https://vitejs.dev/
[vite-plugin-ssr]: https://vite-plugin-ssr.com/
[ddev]: https://ddev.readthedocs.io/en/latest/
[node.js]: https://nodejs.org/en/
[yarn 1.x]: https://classic.yarnpkg.com/lang/en/
