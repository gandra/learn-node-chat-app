const moment = require('moment');


// Jan 1st 1970 00:00:00 am (in UTC)
// 1000 => 1 sec => Jan 1st 1970 00:00:01 am
// 10000 => 1 sec => Jan 1st 1970 00:00:10 am


// new Date().getTime()


// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


let date = moment();
console.log(date.format('h:mm a'));


let someTimestamp = moment().valueOf();
console.log(someTimestamp);