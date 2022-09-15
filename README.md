# Provide a descriptive function name as an useEffect param. (no-anonymous-functions/use-effect)

There can be in fact multiple complex useEffect functions in a single React component and this rule aims to enforce usage of named functions as a first param.

## Usage
Install the plugin into dev dependencies with package manager of your choice and then in your eslint config add the plugin and the rule.

```
npm i -D eslint-plugin-no-anonymous-functions
yarn add -D eslint-plugin-no-anonymous-functions
pnpm i -D eslint-plugin-no-anonymous-functions
```

```json
{
    "plugins": ["no-anonymous-functions"],
    "rules": {
        ...
    "no-anonymous-functions/use-effect": "error",
        ...
}
```

## Rule Details

This rule aims to enforce naming your functions in useEffect.

Examples of **incorrect** code for this rule:

```js

useEffect(()=>{})

```

Examples of **correct** code for this rule:

```js

useEffect(function loadUsersData(){})

```

## When Not To Use It

When you don't agree with the base principle of this rule.
