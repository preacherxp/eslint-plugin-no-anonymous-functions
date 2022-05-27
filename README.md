# Provide a descriptive function name as an useEffect param. (no-anonymous-functions/use-effect)

There can be in fact multiple complex useEffect functions in a single React component and this rule aims to enforce usage of named functions as a first param.

## Usage

In your eslint config add the plugin and the rule.
    "plugins": ["no-anonymous-functions"],
    "rules": {
        ...
    "no-anonymous-functions/use-effect": "error",
        ...
}

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