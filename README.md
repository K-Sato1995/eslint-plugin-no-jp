# eslint-plugin-no-jp

![npm](https://img.shields.io/npm/v/eslint-plugin-no-jp)
![CI](https://github.com/K-Sato1995/eslint-plugin-no-jp/actions/workflows/github-actions.yml/badge.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/eslint-plugin-no-jp?color=red)

## Overview

Helps the team(you) stick to English throuout the codebase. In other words, it helps the team(you) not rely on Japaneseð¯ðµ)

## Installation

- with Yarn

```sh
yarn add -D eslint-plugin-no-jp
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

## ð Rule Details

### no-jp/no-jp-comment

Examples of ð incorrect code for this rule:

```js
// æ¥æ¬èªã®ã³ã¡ã³ããæ¸ãã¦ããã¨Lintã«æããã
const greeting = () => {
    return "Hello"
}
```

Examples of ð correct code for this rule:

```js
// Gotta stick to English
const greeting = () => {
    return "Hello"
}
```

### no-jp/no-jp-identifiers

Examples of ð incorrect code for this rule:

```js
const æ¥æ¬èªã®é¢æ°å = () => {
    return "Hello"
}

const æ¥æ¬èªã®å¤æ° = "Konnichiha"
```

Examples of ð correct code for this rule:

```js
const stickToEnglish = () => {
    return "Hello"
}

const englishVar = "Hello World"
```

## ðLICENCE

MIT
