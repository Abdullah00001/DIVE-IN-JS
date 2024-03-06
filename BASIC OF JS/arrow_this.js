let users = () => {
    console.log("hello")
}
users()
let Subtracting = (number1, number2) => {
    return number1 - number2
}
console.log(Subtracting(170, 60));
let sumNumbers = (number1, number2) => (number1 + number2)
console.log(sumNumbers(10, 20))
let submission = (number1, number2) => number1 * number2
console.log(submission(50, 40));
let objctReturn = () => ({ userName: "abdullah@12" })
console.log(objctReturn());
/* 
Immediately Invoked Function Expressions IIFE
*/
(function learnIIFE() {
    //name iife
    console.log("LEARNING GOING ON....");
})();
(() => { console.log("LEARING IIFE") })();
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}