import _ from "lodash/core.js";
//4.1.1
function finder(valueFun, bestFun, coll) {
	return _.reduce(coll, function(best, current) {
  	var bestValue = valueFun(best);
    var currentValue = valueFun(current);
    
    return (bestValue === bestFun(bestValue, currentValue)) ? best: current;
  })
}

console.log(finder(_.identity, Math.max, [1,2,3,4,5]));