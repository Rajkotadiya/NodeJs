const fs = require('fs')
const chalk = require('chalk')

// add Notes Function
const addNotes = (title,body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push ({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('title is taken'))
    }
    
}

//remove Notes Function
const removeNotes = (title) => {
    const notes = loadNotes()

    const notestoKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notestoKeep.length) {
        saveNotes(notestoKeep)
        console.log(chalk.green.inverse('Notes is removed'))
    }
    else {
        console.log(chalk.red.inverse('No Notes is removed'))
    }  
}

const listNotes = () => {
    console.log(chalk.inverse('Yours Notes'))
    const notes = loadNotes()
    notes.forEach((note)=> {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const readTitle = notes.find((note) => note.title === title)

    if (readTitle) {
        console.log(chalk.inverse(readTitle.title))
        console.log(readTitle.body)
    }
    else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } 
    catch (e) {
        return [] 
    }
}



module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}