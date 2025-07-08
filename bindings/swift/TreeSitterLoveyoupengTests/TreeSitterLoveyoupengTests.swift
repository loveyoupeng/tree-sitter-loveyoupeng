import XCTest
import SwiftTreeSitter
import TreeSitterLoveyoupeng

final class TreeSitterLoveyoupengTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_loveyoupeng())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Loveyoupeng grammar")
    }
}
