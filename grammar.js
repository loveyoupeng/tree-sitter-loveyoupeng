/**
 * @file learning demo for tree-sitter
 * @author loveyoupeng <loveyoupeng@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "loveyoupeng",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
