const Notes = require('../models/notes.models')
const path = require('path')
const fs = require('fs')

const myNotes = async (req, res) => {
    const authorName = req.query.author
    const title = req.query.title
    Notes.findOne({'author':authorName,'title':title},(err,note)=>{
        if(err){
            console.log(err)
        } else {
            console.log(note)
        }
    })

    res.status(200).send({ "message": "Hello" });
}

const insertNotes = async (req, res) => {
    
    var obj = {
        title: req.body.title,
        author: req.body.author,
        description:req.body.description,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: 'image/jpg'
        }
    }

    const notes = new Notes(obj)
    notes.save()

    res.status(200).send({ "status": "received" });
}

module.exports = { myNotes, insertNotes }