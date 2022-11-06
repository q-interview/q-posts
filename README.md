## Q Posts

Posts regarding latest and greatest in the tech world!

## Dev Setup

- Before starting out here are some steps you should consider
  - Instal [node](https://nodejs.org/en/) (16.10.0 is preferred version)
  - Installing [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/install/), or `nmp i -g yarn`
  - Run following command `yarn`
  - Run `yarn setup::dev` to setup .env.local file for local development
  - For best experience use [VS Code](https://code.visualstudio.com/)
  - Extensions: [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Available Scripts

- yarn dev -> Run app on localhost for development (HMR)
- yarn build -> Build for production
- yarn setup::dev -> Creates started .env.local for local development
- yarn preview -> Preview as a deployed app
- yarn lint -> Linter check of code
- yarn test -> Run jest tests
- yarn husky-build -> Build command which is run pre commit to check if the code will build
- yarn prepare -> Script used by husky

## CI flow

**IMPORTANT** pushing directly to main is not allowed proper PR will need to be issued

- Pre commit hook husky is installed in the project
- Before commit is created set of commands will be ran to ensure that tests, build and lint pass the requirements
- After the commit has been created and new branch has been pushed to remote Github Actions will do checks to ensure that developer hasn't used `--no-verify` flag

## CD flow

**IMPORTANT** creating a PR will automatically deploy preview of the app!

- Once the PR created Vercel bot will automatically create and deploy preview of the app
- After the merge of PR if there are no major changes to the preview that was merged that preview will be promoted to production!

## Third party usage

All the packages used have MIT license

- [@heroicons/react](https://github.com/tailwindlabs/heroicons) -> Part of the tailwind css ecosystem to make beautiful UI
- [jest](https://jestjs.io/) -> Testing library for Unit testing
- [@testing-library](https://testing-library.com/) -> Testing framework used for testing React UI with jest
- [@swc](https://swc.rs/) -> Compiler added for tests since it is faster than babel and it doesn't have cold start
- [eslint](https://eslint.org/) -> Code linter
- [husky](https://typicode.github.io/husky/#/) -> Tool used for pre-commit hooks to help in preventing production crashes
- [prettier](https://prettier.io/) -> Code formatting
- [TailwindCSS](https://tailwindcss.com/) -> CSS framework for rapidly building modern websites/apps
- [Typescript](https://www.typescriptlang.org/) -> Superset of JavaScript, used for strong typing JS apps
- [vite](https://vitejs.dev/) -> Substitution for webpack and react-scripts
- [react-infinite-scroll-hook](https://www.npmjs.com/package/react-infinite-scroll-hook) -> A hook for fast implementation of infinite loaders

## Tests situation

Unfortunately I had major issues with my machine and jest, so I wasn't able to properly run some major tests since of few misalignments in the versions, plus there were
some major issues with Vite itself and jest, I used SWC (speedy web compiler) since I believe that it is better than babel loader and ts loader for jest tests, plus the known issue regarding

```js
import.meta.env;
```

Are still not resolved (reoccurring issue) so I needed to disable tests, there are million workarounds but I personally do not see them as my advantage in this exam, so I didn't include them!

I had left tests folder, but they are far from complete, hope that whoever is reading this understands.
