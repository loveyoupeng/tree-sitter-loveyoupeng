from unittest import TestCase

import tree_sitter
import tree_sitter_loveyoupeng


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_loveyoupeng.language())
        except Exception:
            self.fail("Error loading Loveyoupeng grammar")
