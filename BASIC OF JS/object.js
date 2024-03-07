let strngObj=Symbol("1db03")
let usersDetails = {
    usersName: "abdullah",
    "users Full Name":"Abdullah Bin Omar Chowdhury",
    [strngObj]:{
        userspassword:"gc12d6u#90",
        usersLocation:"Dhaka,Bangladesh"
    },
    usersAge: 22,
    usersEmail: "example123@gmail.com",
    usersLoginInfo: false
}
/* console.log(usersDetails.usersName)
console.log(usersDetails["users Full Name"])
console.log(usersDetails["usersAge"])
console.log(usersDetails[strngObj].userspassword) */
usersDetails.hello=function(){
    console.log("Hello World")
}
// console.log(usersDetails.hello())