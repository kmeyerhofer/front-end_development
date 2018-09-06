// function myBind(func, context) {
//   return function() {
//     return func.apply(context, arguments);
//   }
// }

function myBind(func, context) {
  var partialArgs = [].slice.apply(arguments, [2]);

  return function() {
    var remainingArgs = [].slice.apply(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(context, fullArgs);
  }
}
