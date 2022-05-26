/**
 * @fileoverview Provide a descriptive function name as an useEffect param.
 * @author michh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-anonymous-functions-in-use-effect"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run("no-anonymous-functions-in-use-effect", rule, {
  valid: [
    {
      code: "useEffect(function name(){})",
    },
  ],

  invalid: [
    {
      code: "useEffect(()=>{})",
      errors: [{ message: "Don't use anonymous functions in useEffect.", type: "ExpressionStatement" }],
    },
  ],
});
