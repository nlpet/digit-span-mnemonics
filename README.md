# Digit Span Mnemonics

## About
This is a simple app that is aimed at improving memory. I've used the game digit span as a metric.

The goals are:  
* Learn to encode numbers as letters using the [Mnemonic Major System](https://en.wikipedia.org/wiki/Mnemonic_major_system)  
* Practice until the association becomes innate  
* Learn to quickly insert vowels whenever appropriate to form words / phrases / whole sentences  

Sentences are easier to remember, so this method should (remains to be tested) greatly improve one's recollection of strings of digits.


## Usage

Install by running `npm install` or `yarn install`. To run the development build `npm start` or `yarn start` and for an optimized build, run:

```
yarn run build
yarn global add serve
serve -s build
```
or `yarn start-optimised`. Then, navigate to <http://localhost:5000>.

If a build already exists and no changes have been introduced since the last build, then running `serve -s build` is sufficient.

To run tests `npm test` or `yarn test` and for test coverage report `npm test-report` or `yarn test-report`. To view the coverage html report, open `cover/index.html` in a browser.

## Notes

It uses local storage, so boards will be saved until the local storage is cleared. You can clear it by running

```
window.localStorage.clear()
```
in Chrome's console, for example.
