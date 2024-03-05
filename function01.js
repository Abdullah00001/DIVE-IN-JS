/* 
void funtion thats return anything when its called its just print/or giving some out put and we cant store this functions 
*/
function addtwoNumber(number1, number2) {
    console.log(number1 + number2)
}
addtwoNumber(7, 4)
/* 
returning function/non-void function this type of function return a value and we can store the function or functions value in variable
*/
function sumTwoNumber(number1, number2) {
    return number1 * number2
}
let sum = sumTwoNumber(8, 16)
console.log(sum)
/* 
function with no parameters These functions are defined without any input parameters and can be called without passing any arguments. They typically perform a specific task or computation without relying on external data. we can also store these type of function
*/
function subtractNumber() {
    const pi = 3.1618
    const gravity = 9.88
    return pi / gravity
}
let sub = subtractNumber()
console.log(sub)
/* 
function that take no parameter and didnt return anything
*/
function procidure() {
    console.log("hello world")
}
procidure()