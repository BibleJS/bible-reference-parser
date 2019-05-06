## Documentation

You can see below the API reference of this module.

### `ReferenceParser(reference)`

#### Params

- **String** `reference`: The verse reference in one of the following formats:
   - `<book> <chapter>:<verse>`
   - `<book> <chapter>:<firstVerse>-<lastVerse>`
   - `<book> <chapter>:<oneVerse>,<anotherVerse>`
   - `<book> <chapter>`

#### Return
- **Object** An object containing:
 - `book` (String): The Bible book.
 - `chapter` (String): The reference chapter.
 - `verses` (Array|String): The reference verses or `"ALL"` if only the
   chapter was provided.

