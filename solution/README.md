# Bowling Game TDD
Learn the basic of Test Driven Development

## Requirements
* NodeJS
* NPM

## Instructions
* `npm install -g testem`. Might need to do `sudo npm install -g testem`
* `npm install`
* `cd src` and run `testem`, see that all tests pass
* go back up one directory to the root directory
* run `npm test`
* `cd coverage` and cd `lcov-report`
* open `index.html` and see that `src` does not have 100% test coverage even though the tests passed
* fill in `gameSpec.js` so that it passes all tests and has 100% test coverage, you can code it however you want
* when developing your test, `cd src` and run `testem`
* when generating coverage report, run `npm test` in root directory instead

## More Explanation
* `npm install` will install all the packages that is in `package.json`, listed under `dependencies` and `devDependencies`
* `npm test` basically runs whatever command that is located under `test` property in `package.json`
* Code coverage is an indicator of to what extent we are testing all the parts of our code.  It will have 100% coverage if it runs every single line of the code being tested. 
* Why we need automated testing? Some reasons are:
  * Confidence that the code is working and according to specifications
  * Reduces the need for manual testing, means faster development
  * If we need to introduce features, change or refactoring in the future, it makes sure we do not break any current specifications
  * Easier to track on which features have been implemented
  * Code coverage can also warns us if a developer intentionally/unintentionally left our a part of code that is not part of the spec

* [Testem](https://github.com/testem/testem) is a test runner for JavaScript.
  * A test runner is a tool that picks up scripts that contain unit tests (in this case, the `gameSpec.js`), the files to be tested (in this case, the `game.js`) and execute them and writes the test result to the console (in this case, both browser and terminal console).

* Uses [Jasmine 1.3](http://jasmine.github.io/1.3/introduction.html) as its default testing framework
  * A testing framework is an execution environment, the overall system in which the tests will be automated. It is defined as the set of assumptions, concepts and practices that constitute a platform for automated testing.  It integrates various reusable libraries that act as small building blocks which needs to be assembled to represent the business process.
  * There are several other JavaScript testing frameworks. The two most popular ones are [Jasmine](http://jasmine.github.io/) and [Mocha](https://mochajs.org/)

