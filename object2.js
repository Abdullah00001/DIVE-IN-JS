let objct = {
    usersEmail: "examples0123@gmail.com",
    usersName: {
        usersfullname: {
            usersInfo: {
                firstName: "Abdullah",
                lastName: "Chowdhury"
            }
        }
    }
}
/* console.log(objct.usersName.usersfullname.usersInfo.firstName," ",objct.usersName.usersfullname.usersInfo.lastName); */
let objct1 = {
    0: "more",
    1: "toGo",
    2: 987
}
let objct2 = {
    0: "canGo",
    1: "are you",
    2: 903
}
// let objct3=Object.assign({},objct1,objct2)
let objct3 = { ...objct1, ...objct2 }
// console.log(objct3)
let usersDetails = {
    usersName: "Abdullah Bin Omar Chowdhury",
    usersFirstName: "Abdullah",
    usersLastName: "Chowdhury",
    usersEmail: "examples012@gmail.com",
    usersId: 123457
}
/* console.log(Object.keys(usersDetails))
console.log(Object.values(usersDetails));
console.log(Object.entries(usersDetails)); */
let users = [
    { userName: "abdullah01", userPassWord: "amikifapobo" },
    { userName: "omar78", userPassWord: "SubahanAllah" },
    { userName: "chowdhury10", userPassWord: "Alhamdulillah" },
    { userName: "Bin90", userPassWord: "AllahuAkbar" }
]
/* console.log(users[0].userName," ",users[0].userPassWord) */
for (let a of users) {
    console.log(a.userName, " ", a.userPassWord)
}