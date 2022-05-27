/**
 * @fileoverview Provide a descriptive function name as an useEffect param.
 * @author michh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Provide a descriptive function name as an useEffect param.",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  create: function (context) {
    return {
      ExpressionStatement(node) {
        if (node.expression.arguments[0].type === "ArrowFunctionExpression") {
          context.report({
            node: node,
            message: "Don't use anonymous functions in useEffect.",
          });
        }
      },
    };
  },
};
