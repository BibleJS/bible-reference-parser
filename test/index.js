// Dependencies
var RefParser = require("../index")
  , Debug = require("bug-killer")
  ;

// Tests
var tests = [
    "Mattew 1:1"
  , "John 1:1-10"
  , "Luke 2"
  , "Marcus 3:1,2,3"
];


// Run tests
for (var i = 0; i < tests.length; ++i) {
    console.log(
        Debug.log(tests[i] + " - " + JSON.stringify(RefParser(tests[i])))
    );
}
