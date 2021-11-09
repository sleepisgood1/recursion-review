// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arrayValues = [];
  var objectValues = [];
  //undefined, function
  if (!obj && typeof obj !== 'boolean' && typeof obj !== 'number') {
    return 'null';
  }
  //number, boolean,
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    //loop over the array
    for (let i = 0; i < obj.length; i++) {
      arrayValues.push(stringifyJSON(obj[i]));
    }
    return '[' + arrayValues + ']';
  } else if (obj instanceof Object) {
    for (var keyForObj in obj) {
      if (typeof obj[keyForObj] === 'function' || obj[keyForObj] === undefined) {
      } else {
        var pair = '"' + keyForObj + '":' + stringifyJSON(obj[keyForObj]);
        objectValues.push(pair);
      }
    }
    return '{' + objectValues + '}';
  }
  //string
  //declare an empty string
  // var resultString = '';
  // //iterate through obj
  // var resultArrayForArray = [];
  // var resultArrayForObj = [];
  // //check what typeof thing it is
  // if (obj instanceof Object) {
  //   var keyForObj = Object.keys(obj);
  //   resultstring += '{' + keyforobj + ':';
  //   var value = obj[keyforobj];
  //   //if value is obj
  //   if (value instanceof Object) {
  //     resultArrayForObj.push(stringifyJSON(value));
  //   }
  //   // if value is array
  //   if (Array.isArray(value) {
  //     resultArrayForObj.push(stringifyJSON(value));
  //   })
  //   if (typeof value === )
  //   // if value is normal vlaue

  //   return '{' + resultArrayForObj + '}'
  // }
  // return '[' + resultArrayForArray + ']'
  //if its an obj, add an open bracket to the empty string
  //and add a key value pair
  //call stringify json again for the next item in the obj
  //if you find an array, you add an open square bracket
  //call stringify again (recurse) until you get to the end of the array, add a closing bracket
  // at the end of the obj, get to the end of the closing bracket
  //if you find a number or string, add it to the empty string
};
