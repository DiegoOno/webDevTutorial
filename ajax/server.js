const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Error.')
        }
        res.end('Sucess!!')
    })
})

app.post('/form', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/evenOrOdd', (req, res) => {
    const even = parseInt(req.query.number) % 2 === 0
    res.send({
        result: even ? 'even' : 'odd'
    })
})

app.listen(8080, () => console.log('Running...'))