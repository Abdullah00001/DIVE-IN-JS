const parentElement = document.querySelector('.parent')
console.log(parentElement)
const childrenElement = parentElement.children
console.log(parentElement.children)
console.log(parentElement.children[3].innerText)
/* for (let i = 0; i < childrenElement.length; i++) {
    childrenElement[i].innerText = "hello"
    childrenElement[i].style.backgroundColor="#badc58"
} */
/* console.log(parentElement.firstElementChild)
console.log(parentElement.lastElementChild); */
const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);