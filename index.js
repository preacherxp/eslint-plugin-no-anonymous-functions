module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Provide a descriptive function name as an useEffect param.",
      category: "Fill me in",
      recommended: false,
      url: null,
    },
    fixable: "code",
    schema: [],
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
