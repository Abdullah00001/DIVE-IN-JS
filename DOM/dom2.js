const div1 = document.createElement('div')
console.log(div1);
// div1.innerText="hi i am somudro"
div1.className = "parentDiv"
div1.id = Math.random() * 10 + 2
div1.style.backgroundColor = "#686de0"
div1.style.height = "60px"
div1.style.width = "60px"
div1.style.padding = "75px"
const divTexts = document.createTextNode("Hello I Am Somudro")
div1.appendChild(divTexts)
document.body.appendChild(div1)