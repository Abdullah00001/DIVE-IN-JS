let arr = ["s", "o", "m", "u", "d", "r", "o"]
// for (let i = 0; i < arr.length; i++) console.log(arr[i])
/* for (let i = arr.length-1;i>=0; i--) console.log(arr[i])
arr[0]="a"
for (let i = 0; i < arr.length; i++) console.log(i," : ",arr[i])
arr.push("b","i","n")
for (let i = 0; i < arr.length; i++) console.log(i," : ",arr[i])
if(arr.includes("A")) console.log("ITS TIME TO GO")
else console.log("ITS TIME TO END")
 */
let arr1 = [10, 30, 20, 60, 90, 40, 100, 50]
let arr2 = []
for (let i = 2; i <= 6; i++) arr2[i-2] = arr1[i]
for (let i = 0; i < arr2.length; i++) console.log(i, ":", arr2[i])
// console.log(arr2[0])
