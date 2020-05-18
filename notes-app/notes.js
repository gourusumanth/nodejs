const fs =require("fs")
const chalk =require("chalk")

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New note added"))
    } else {
        console.log(chalk.red("Note title taken"))
    }

}
const removeNotes = (title, body) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep);
    if(notes.length != notesToKeep.length) {
        console.log(chalk.green("Successfully removed note"))
    } else{
        console.log(chalk.red("Note not found"))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}
const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync("notes.json", data);

}

const listNotes = () => {
    console.log(chalk.blue("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title);
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note === undefined) {
        console.log(chalk.red("Note not found"))
    } else {
        console.log(chalk.green("Title: ") + chalk.black(note.title))
        console.log(chalk.green("Body: ") + chalk.black(note.body))
    }
}
module.exports = {
    addNotes,
    removeNotes,
    listNotes,
    readNote
}

