// Dependencies
var RefParser = require("../lib")
  , Debug = require("bug-killer")
  ;

// Tests
const TESTS = [
    "Mattew 1:1"
  , "John 1:1-10"
  , "Luke 2"
  , "Marcus 3:1,2,3"
];


// Run tests
TESTS.forEach(function (c) {
    Debug.log(c + " - " + JSON.stringify(RefParser(c)));
});
