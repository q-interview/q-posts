## Q Posts

Posts regarding latest and greatest in the tech world!

## Dev Setup

- Before starting out here are some steps you should consider
  - Instal [node](https://nodejs.org/en/) (16.10.0 is preferred version)
  - Installing [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/install/), or `nmp i -g yarn`
  - Run following command `yarn`
  - For best experience use [VS Code](https://code.visualstudio.com/)
  - Extensions: [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Available Scripts

- yarn dev -> Run app on localhost for development (HMR)
- yarn build -> Build for production
- yarn preview -> Preview as a deployed app
- yarn lint -> Linter check of code
- yarn test -> Run jest tests
- yarn husky-build -> Build command which is run pre commit to check if the code will build
- yarn prepare -> Script used by husky

## CI flow

**IMPORTANT** deployment directly to main is not allowed proper PR will need to be issued

- Pre commit hook husky is installed in the project
- Before commit is created set of commands will be ran to ensure that tests, build and lint pass the requirements
- After the commit has been created and new branch has been pushed to remote Github Actions will do checks to ensure that developer hasn't used `--no-verify` flag

## CD flow

- Once the PR created Vercel bot will automatically create and deploy preview of the app
- After the merge of PR redeployment of main branch will occur

## Third party usage

All the packages used have MIT license

- [@heroicons/react](https://github.com/tailwindlabs/heroicons) -> Part of the tailwind css ecosystem to make beautiful UI
- [jest](https://jestjs.io/) -> Testing library for Unit testing
- [@testing-library](https://testing-library.com/) -> Testing framework used for testing React UI with jest
- [eslint](https://eslint.org/) -> Code linter
- [husky](https://typicode.github.io/husky/#/) -> Tool used for pre-commit hooks to help in preventing production crashes
- [prettier](https://prettier.io/) -> Code formatting
- [TailwindCSS](https://tailwindcss.com/) -> CSS framework for rapidly building modern websites/apps
- [Typescript](https://www.typescriptlang.org/) -> Superset of JavaScript, used for strong typing JS apps
- [vite](https://vitejs.dev/) -> Substitution for webpack and react-scripts
- [react-infinite-scroll-hook](https://www.npmjs.com/package/react-infinite-scroll-hook) -> A hook for fast implementation of infinite loaders
