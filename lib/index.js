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
var ReferenceParser = function (reference) {

    // this object will be returned
    var parsed = {
        book: null
      , chapter: null
      , verses: []
    };

    // TODO regexp
    parsed.book = reference.substring(0, reference.lastIndexOf(" "));

    var chapterAndVerses = reference.substring(reference.lastIndexOf(" ") + 1)
      , splits = chapterAndVerses.split(":")
      ;

    switch (splits.length) {
        // Chapter and verses provided
        case 2:
            parsed.chapter = splits[0];
            var verses = splits[1].split(/\-|\,/)
              , first = parseInt(verses[0])
              , last = parseInt(verses[1])
              ;

            // e.g. 1-10
            if (splits[1].indexOf("-") !== -1) {
                for (var i = first; i <= last; ++i) {
                    parsed.verses.push(i.toString());
                }
            } else {
               parsed.verses = verses;
            }
            break;
        // Chapter only
        case 1:
            parsed.chapter = splits[0];
            parsed.verses = "ALL";
            break;
        default:
            return null;
    }

    return parsed;
};

module.exports = ReferenceParser;
