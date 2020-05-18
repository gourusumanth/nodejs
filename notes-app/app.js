const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

//customize yargs version
yargs.version('1.1.0')
//add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'content of the note',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
      title: {
          describe:'Note title',
          demand: true,
          type: 'string'
      }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
//Create read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            describe:'Note title',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()





