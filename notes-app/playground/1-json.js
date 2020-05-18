const fs = require("fs")
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }
//
// const bookJson = JSON.stringify(book);
//
//
// fs.writeFileSync("1-json.json", bookJson)

const databuffer = fs.readFileSync("1-json.json")

console.log(databuffer.toString());

const data = JSON.parse(databuffer.toString())
console.log(data.title)


const sampleJson = JSON.parse(fs.readFileSync("1-json.json").toString())
sampleJson.name="Sumanth"
sampleJson.age="25"

fs.writeFileSync("1-json.json", JSON.stringify(sampleJson))
