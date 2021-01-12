var _ = require('lodash');
const personStr = `{"name":"John","age":"30","address":{"city":"Newyork","country":"USA","location":{"lat":"80.9","lng":"70"}}}`
const person = strToObject(personStr);
/**
 *
 * @param objStr {string}
 */
function strToObject(objStr) {
    if (objStr.startsWith("{")) {
        var obj = {}
        var valueStr = objStr.substring(1, objStr.length - 1);
        var keyValueFragments = valueStr.split(",");
        keyValueFragments.forEach((fragment) => {
            var fragKeyValues = fragment.split(":")
            if (fragKeyValues[1].startsWith("{")) {
                obj[fragKeyValues[0]] = strToObject(fragKeyValues[1]);
            } else {
                obj[fragKeyValues[0]] = fragKeyValues[1];
            }
        });
        return obj;
    }
    if (objStr.startsWith("[")) {
    }
}