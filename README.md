# eslint-plugin-no-jp

__⚠️Currently Not Available⚠️___
※ I just need to rerun all jobs [here](https://github.com/K-Sato1995/eslint-plugin-no-jp/actions/runs/1892253281) after 24h.

## Overview

Helps the team(you) stick to English in the codebase.

## Installation

- with Yarn

```sh
yarn add -D eslint-plugin-jsx-dollar
```

- with npm

```sh
npm install eslint-plugin-no-jp --save-dev
```

## Usage

Add `eslint-plugin-no-jp` to the `plugins` section and add the rules to the `rules` section of your `.eslintrc` configuration file. (You can also omit the `eslint-plugin-` prefix.)

```json
{
    "plugins": [
        "eslint-plugin-no-jp"
    ],
    "rules": [
        "no-jp/no-jp-identifier": 2,
        "no-jp/no-jp-comment": 2
    ]
}
```

## 📖 Rule Details

### no-jp/no-jp-comment

Examples of 👎 incorrect code for this rule:

```js
// 日本語のコメントを書いているとLintに怒られる
const greeting = () => {
    return "Hello"
}
```

Examples of 👍 correct code for this rule:

```js
// Gotta stick to English
const greeting = () => {
    return "Hello"
}
```

### no-jp/no-jp-identifiers

Examples of 👎 incorrect code for this rule:

```js
const 日本語の関数名 = () => {
    return "Hello"
}

const 日本語の変数 = "Konnichiha"
```

Examples of 👍 correct code for this rule:

```js
const stickToEnglish = () => {
    return "Hello"
}

const englishVar = "Hello World"
```
