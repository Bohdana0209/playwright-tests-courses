import color from "chalk";
import testTitles from "./testTitles.js";

import {passed, failed, fkaky} from './constants.js';
console.log(color.blue('Test run has finished'));
console.log(color.green('Passed: ', passed));
console.log(color.red('Failed: ', failed));
console.log(color.yellow('Flaky: ', fkaky));
console.log(testTitles.test1);
console.log(testTitles.test2);

// import * as stats from './constants.js';
// console.log(color.blue('Test run has finished'));
// console.log(color.green('Passed: ', stats.passed));
// console.log(color.red('Failed: ', stats.failed));
// console.log(color.yellow('Flaky: ', stats.fkaky));