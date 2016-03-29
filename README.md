# Bowling Game TDD
Learn the basic of Test Driven Development

## Requirements
* NodeJS
* NPM

## Instructions
* `npm install -g testem`. Might need to do `sudo npm install -g testem`
* make sure you are in this root directory
* `testem`
* fill in `gameSpec.js` so that it passes all tests.

## More Explanation
* Why we need automated testing? Some reasons are:
  * Confidence that the code is working and according to specifications
  * Reduces the need for manual testing, means faster development
  * If we need to introduce features, change or refactoring in the future, it makes sure we do not break any current specifications
  * Easier to track on which features have been implemented

* [Testem](https://github.com/testem/testem) is a test runner for JavaScript.
  * A test runner is a tool that picks up scripts that contain unit tests (in this case, the `gameSpec.js`), the files to be tested (in this case, the `game.js`) and execute them and writes the test result to the console (in this case, both browser and terminal console).

* Uses [Jasmine 1.3](http://jasmine.github.io/1.3/introduction.html) as its default testing framework
  * A testing framework is an execution environment, the overall system in which the tests will be automated. It is defined as the set of assumptions, concepts and practices that constitute a platform for automated testing.  It integrates various reusable libraries that act as small building blocks which needs to be assembled to represent the business process.
  * There are several other JavaScript testing frameworks. The two most popular ones are [Jasmine](http://jasmine.github.io/) and [Mocha](https://mochajs.org/)

