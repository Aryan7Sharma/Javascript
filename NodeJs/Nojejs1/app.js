const  _ = require('lodash');
console.log(_)
const items = [1, [2, [3, [4,[5,]]]]]
const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)