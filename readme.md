<p align="center">
  <a href="https://adamknee.net">
    <img alt="Adam Knee's Logo" src="https://res.cloudinary.com/adamknee/image/upload/v1617733739/portfolio-gatsby/adam-knee-logo_s4ekbl.svg" width="330" />
  </a>
</p>

# AdamAnSubtractM's Eslint & Prettier Setup

These are my settings for ESLint and Prettier

## What it does

- Lints JavaScript and Typescript (JS, JSX, TS, TSX) based on the latest standards
- Fixes issues and formatting errors with ESLint and fixes HTML and CSS/SCSS with Prettier
- You can see all the [rules here](https://github.com/adamansubtractm/eslint-config-adamansubtractm/blob/master/.eslintrc.js)

## Installing

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```bash
npx install-peerdeps --dev eslint-config-adamansubtractm
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": ["adamansubtractm"]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install the [Prettier package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
"eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.
