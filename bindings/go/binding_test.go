package tree_sitter_loveyoupeng_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_loveyoupeng "github.com/loveyoupeng/tree-sitter-loveyoupeng.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_loveyoupeng.Language())
	if language == nil {
		t.Errorf("Error loading Loveyoupeng grammar")
	}
}
