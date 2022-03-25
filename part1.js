//Part 1
/* 
1. Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen.
Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters 
into '#'.

This function should take all characters as a paramater, 
not just integers. If it's given an empty string as a paramater, 
your function should return an empty string back – 
it should NOT return undefined or null.

examples: 
maskify(123456789); => returns #####6789
maskify(123); => returns 123
maskify(maskify); => returns ###kify
maskify(''); => returns ''

*/

maskify = (creditcard) => {
    return (creditcard.slice(0, -4).replace(/./g, '#') + creditcard.slice(-4));
}
  
maskify("123456789");
  
  
  
  

// 2. Write a function that would allow you to do this:
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"
  
function exercise () {
    return(`Today's exercise: ${exercise()}`);
}



  
  
// 3. Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"
  

  
// 4. - Data Security: Using your knowledge of scoping, create an object called 
//       pii (Personally Identifiable Information) that cannot be accessed directly. 
//       The object should have at least two properties: name and ssn.
//       Only the name property should be accessible, 
//       and it should be called through a public function.
//       The ssn property should not be accessible at all.
  
//       Creating private objects and private properties helps you control 
//       who has access to what data and helps you prevent people who 
//       shouldn't see important info like social security numbers 
//       from getting access to the data.
//       You can use 'getName' or other get methods to access data that 
//       people might need. For example, people addressing a package 
//       or email may need a customer's name, but they definitely 
 //       shouldn't have access to their ssn.
  
  
function pii(){
    const name = "Toya";
    let ssn = "123456789";
    console.log(name);
}
  
pii();
  
  
