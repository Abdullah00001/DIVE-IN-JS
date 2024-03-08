function addLanguage(langeName){
    const parentUl=document.querySelector('.language')
    const newElement=document.createElement('li')
    const newText=document.createTextNode(langeName)
    newElement.appendChild(newText)
    parentUl.appendChild(newElement)
}
addLanguage("python")
addLanguage("C++")
addLanguage("C")
const elementrmv=document.querySelector("li:nth-child(2)")
// console.log(elementrmv);
//elementrmv.innerHTML="Mojo"
const newLi=document.createElement('li')
const newVal=document.createTextNode("Mojo")
newLi.appendChild(newVal)
//elementrmv.appendChild(newVal)
elementrmv.replaceWith(newLi)
const rmvElement=document.querySelector("li:last-child")
rmvElement.remove()