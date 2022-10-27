const _ = require('lodash');

const numbers = [32,45,78,42,18,56];

_.each(numbers, function(number,i){
    console.log(number)
});