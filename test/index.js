// Dependencies
var RefParser = require("../index")
  , Debug = require("bug-killer")
  ;

Debug._config.logLevel = 4;
Debug._config.displayDate = false;

// Tests
var tests = [
    "Mattew 1:1"
  , "John 1:1-10"
  , "Luke 2"
  , "Marcus 3:1,2,3"
];


// Run tests
for (var i = 0; i < tests.length; ++i) {
    Debug.log(
        tests[i] + " - " + JSON.stringify(RefParser(tests[i])), "info"
    );
}
