const coding = ["cpp", "c", "js", "java", "python"]
coding.forEach((item) => {
    /* console.log(item); */
})
function tesT(item) {
    console.log(item);
}
/* coding.forEach(tesT) */
coding.forEach((item, index) => {
    console.log(`${item} in ${index}`);
})
const languageS = [
    {
        languageName: "Java Script",
        languageFile: ".js"
    },
    {
        languageName: "C",
        languageFile: ".c"
    },
    {
        languageName: "C++",
        languageFile: ".cpp"
    },
    {
        languageName: "Python",
        languageFile: ".py"
    }
]
languageS.forEach((item) => {
    console.log(`${item.languageName} file extension is ${item.languageFile}`);
})