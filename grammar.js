/**
 * @file learning demo for tree-sitter
 * @author loveyoupeng <loveyoupeng@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
	name: "loveyoupeng",
	extras: ($) => [/\s/],

	rules: {
		source_file: ($) => repeat($.init_statement),
		init_statement: ($) => seq("var", $.variable_name, "=", $.expression, ";"),
		expression: ($) => choice($.integer_value, $.variable_name),
		integer_value: ($) => /\d+/,
		variable_name: ($) => /[a-zA-Z][a-zA-Z0-9_]*/,
	},
});
