let arr = ["s", "o", "m", "u", "d", "r", "o"]
for (let i = 0; i < arr.length; i++) console.log(arr[i])
for (let i = arr.length-1;i>=0; i--) console.log(arr[i])
arr[0]="a"
for (let i = 0; i < arr.length; i++) console.log(i," : ",arr[i])
arr.push("b","i","n")
for (let i = 0; i < arr.length; i++) console.log(i," : ",arr[i])
if(arr.includes("A")) console.log("ITS TIME TO GO")
else console.log("ITS TIME TO END")

let arr1 = [10, 30, 20, 60, 90, 40, 100, 50]
let arr2 = []
for (let i = 2; i <= 6; i++) arr2[i-2] = arr1[i]
for (let i = 0; i < arr2.length; i++) console.log(i, ":", arr2[i])
console.log(arr2[0])
for(let a of arr1){
    console.log(a)
}
let foodItem = ["burger", "pizza", "sandwich", "momo"]
let normalFood = ["rice", "beaf", "mutton", "biriyani"]
for (let itemsOfArr of normalFood) {
    foodItem.push(itemsOfArr)
}
for (let i = 0; i < foodItem.length; i++) {
    console.log(foodItem[i])
}
console.log(foodItem)
let allItems=foodItem.concat(normalFood)
console.log(allItems)
let allRecipie = [...foodItem, ...normalFood]
console.log(allRecipie)