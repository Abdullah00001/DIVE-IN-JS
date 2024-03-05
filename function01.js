/* 
void funtion thats return anything when its called its just print/or giving some out put and we cant store this functions 
*/
function addtwoNumber(number1, number2) {
    // console.log(number1 + number2)
}
addtwoNumber(7, 4)
/* 
returning function/non-void function this type of function return a value and we can store the function or functions value in variable
*/
function sumTwoNumber(number1, number2) {
    return number1 * number2
}
let sum = sumTwoNumber(8, 16)
// console.log(sum)
/* 
function with no parameters These functions are defined without any input parameters and can be called without passing any arguments. They typically perform a specific task or computation without relying on external data. we can also store these type of function
*/
function subtractNumber() {
    const pi = 3.1618
    const gravity = 9.88
    return pi / gravity
}
let sub = subtractNumber()
// console.log(sub)
/* 
function that take no parameter and didnt return anything
*/
function procidure() {
    // console.log("hello world")
}
procidure()

/* 
JAVA SCRIPT REST OPERATOR. [...]
in normal function we define the how many perameters we need.but when we dont know how many perameter will be needed than here comes reset operator.its helps us to take multiple peraneter without declaring it.when we call the function we just pass the perameters that we need 
*/
function cartPrice(...num) {
    return num
}
// console.log(cartPrice(10, 20, 30))
/* 
This JavaScript code defines an object named 'users' with properties such as 'usersName', 'usersPassword', and 'usersID'. These properties store information related to a user, including their name, password, and ID number.

The code also contains a function called 'loginInfo'. This function takes an object as a parameter and prints out the user's login information, including their name, password, and ID.

When calling the 'loginInfo' function and passing the 'users' object as an argument, it prints a formatted message displaying the user's login information.

This code demonstrates how to organize user data using objects and how to create functions to handle and display that data.
*/
let users = {
    usersName: "Abdullah",
    usersPassword: "b30n57!#yhf",
    usersID: 9065412
}
function loginInfo(anyobject) {
    console.log(`Hello ! ${anyobject.usersName}\nYour PassWord: ${anyobject.usersPassword}\nYour ID: ${anyobject.usersID}`);
}
// loginInfo(users)
// loginInfo({ usersName: "Abdullah", usersPassword: "Rj5$wXp9@2#uTqZK", usersID: 7392150846 })
const arr = [10, 20, 30, 40]
function usersRush(getArray) {
    return getArray
}
// console.log(usersRush(arr));
console.log(usersRush([17, 42, 95, 68, 33, 21, 57, 84]));