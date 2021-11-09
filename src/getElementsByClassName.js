// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // declare a var for array
  var sameClass = [];
  var element = document.body;
  //create a function to recurse over that will search element for the className
  var searchForClassName = function(element) {
  // check each element for the className and add to the var
    if (element.classList && element.classList.contains(className)) {
      sameClass.push(element);
    }
    // check each element for a childnode
    if (element.hasChildNodes()) {
      //iterate over the childnodes
      for (var i = 0; i < element.childNodes.length; i++) {
        //check if each childnode has clasName by recursing over the function
        searchForClassName(element.childNodes[i]);
      }
    }
  };
  searchForClassName(element);
  return sameClass;
  //  if there is a childnode
  //  do a recursive function call
  // return array with all of the nodes with the mathcing className
};
