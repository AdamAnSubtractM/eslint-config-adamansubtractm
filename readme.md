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

1. Required: Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Required: Install the [Prettier package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Optional: If the prettier settings don't get detected or you want to customize it, create a `.prettierrc` file that adds your formatting settings for HTML, CSS, and SCSS
```json
// example
{
  "tabWidth": 2
}
```
4. Optional: If the prettier ignore settings don't get detected or you want to customize it, create a `.prettierignore` file that adds your formatting ignore settings for HTML, CSS, and SCSS. 
```json
// note: this is important to add (if it doesn't auto get picked up) if you want Eslint to control the formmatting of your js and ts files
{
  *.js
  *.ts
}
```
5. Recommended: Install [Formatting Toggle package](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle). This allows you to toggle on and off the formatOnSave option. This is helpful for projects that you don't want the formatting applied to
6. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
{
  // this one is recommended, not required:
  "formattingToggle.affects": ["formatOnSave"],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[mdx]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[graphql]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}

```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.
