/**
 * ReferenceParser
 *
 * @name ReferenceParser
 * @function
 * @param {String} reference The verse reference in one of the following formats:
 *
 *    - `<book> <chapter>:<verse>`
 *    - `<book> <chapter>:<firstVerse>-<lastVerse>`
 *    - `<book> <chapter>:<oneVerse>,<anotherVerse>`
 *    - `<book> <chapter>`
 *
 * @return {Object} An object containing:
 *
 *  - `book` (String): The Bible book.
 *  - `chapter` (String): The reference chapter.
 *  - `verses` (Array|String): The reference verses or `"ALL"` if only the
 *    chapter was provided.
 */
module.exports = reference => {

    // This object will be returned
    const parsed = {
        book: null
      , chapter: null
      , verses: []
    }

    parsed.book = reference.substring(0, reference.lastIndexOf(" "))

    let chapterAndVerses = reference.substring(reference.lastIndexOf(" ") + 1)
      , splits = chapterAndVerses.split(":")

    switch (splits.length) {
        // Chapter and verses provided
        case 2:
            parsed.chapter = splits[0]
            let verses = splits[1].split(/\-|\,/)
              , first = parseInt(verses[0])
              , last = parseInt(verses[1])

            // e.g. 1-10
            if (splits[1].indexOf("-") !== -1) {
                for (let i = first; i <= last; ++i) {
                    parsed.verses.push(i.toString())
                }
            } else {
               parsed.verses = verses
            }
            break
        // Chapter only
        case 1:
            parsed.chapter = splits[0]
            parsed.verses = "ALL"
            break
        default:
            return null
    }

    return parsed
}
