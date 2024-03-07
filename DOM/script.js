document.getElementById('firstHead').style.backgroundColor = '#2ecc71'
document.getElementById('secondSpan').style.backgroundColor = "#feca57"
document.getElementById('secondSpan').style.padding = '50px'
document.getElementById('secondSpan').style.borderRadius = '50px'
document.getElementById('secondSpan').style.fontSize = "45px"
// document.getElementById('secondSpan').innerText=("my name is somudro")
console.log(document.getElementById('secondSpan').innerHTML)
console.log(document.getElementById('secondSpan').textContent)
console.log(document.getElementById('secondSpan').innerText)
const testSpan = document.getElementById('secondSpan')
testSpan.style.color = "#1B9CFC"
document.querySelector('span').style.backgroundColor = "#55E6C1"
const myul = document.querySelector('ul')
const myli = myul.querySelector('li')
myli.style.color = "green"
myli.style.backgroundColor = '#EAB543'
myli.style.width = '80px'
myli.style.padding = '20px'
const myUl = document.querySelectorAll('ul')
const myLi = document.querySelectorAll('li')
myLi.forEach((item) => {
    item.style.fontSize = "20px"
})
const clsTest = document.getElementsByClassName('on')
const mtArr = Array.from(clsTest)
mtArr.forEach((item)=>{
    item.style.color='orange'
})