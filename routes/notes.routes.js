const express = require('express')
const router = express.Router()
const {myNotes,insertNotes} = require('../controllers/notes.controllers')
var multer = require('multer');
const verifyToken = require('../middlewares/authJWT');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString()+file.originalname)
    }
});
var upload = multer({ storage: storage })

router.route('/api/notes').get(verifyToken,myNotes)
router.route('/api/notes').post(verifyToken,upload.single('img'),insertNotes)

module.exports = router
