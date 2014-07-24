/**
 *  This function parses the provided reference.
 *
 *  Arguments
 *    @reference: string in the following formats
 *      <book> <chapter>:<verse>
 *      <book> <chapter>:<firstVerse>-<lastVerse>
 *      <book> <chapter>:<oneVerse>,<anotherVerse>
 *      <book> <chapter>
 *
 *  Returns
 *    an object in the following format:
 *      {
 *         boook: "<book>"
 *       , chapter: "<chapter>"
 *       , verses: ["...", "..."]
 *      }
 *
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

    // get chapter and verses
    var chapterAndVerses = reference.substring(reference.lastIndexOf(" ") + 1)
      , splits = chapterAndVerses.split(":")
      ;

    // compute
    switch (splits.length) {
        // chapter and verses provided
        case 2:

            // set the chapter
            parsed.chapter = splits[0];

            // get verses
            var verses = splits[1].split(/\-|\,/)

                // parse first and last verse
              , first = parseInt(verses[0])
              , last = parseInt(verses[1])
              ;

            // e.g. 1-10
            if (splits[1].indexOf("-") !== -1) {

                // push all verses
                for (var i = first; i <= last; ++i) {
                    parsed.verses.push(i.toString());
                }
            } else {
               parsed.verses = verses;
            }
            break;

        // chapter only
        case 1:

            // set the chapter
            parsed.chapter = splits[0];

            // take all verses
            parsed.verses = "ALL";
            break;
        default:
            return null;
    }

    return parsed;
};

module.exports = ReferenceParser;
