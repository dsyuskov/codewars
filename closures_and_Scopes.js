function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {       
        callbacks.push(function () {
            return i;
        });
    }
    return callbacks;
}

var callbacks = createFunctions(5);
console.log(callbacks[0]());
i = 2;
console.log(callbacks[1]());
// console.log(callbacks[2]());
// console.log(callbacks[3]());
/*
function createCounter() {
    let counter = 0;
    const myFunction = function() {
      counter = counter + 1;
      return counter;
    }
    return myFunction;
  }
  */
