const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/home', function (req, res) {
    res.render('home')
})
// --------------> DESTINATION SECTIONS <--------------------
app.get('/destination-moon', function (req, res) {
    res.render('destination-moon')
})

app.get('/destination-mars', function (req, res) {
    res.render('destination-mars')
})

app.get('/destination-europa', function (req, res) {
    res.render('destination-europa')
})
app.get('/destination-titan', function (req, res) {
    res.render('destination-titan')
})

// --------------> CREW SECTIONS <--------------------
app.get('/crew-commander', function (req, res) {
    res.render('crew-commander')
})
app.get('/crew-engineer', function (req, res) {
    res.render('crew-engineer')
})
app.get('/crew-pilot', function (req, res) {
    res.render('crew-pilot')
})
app.get('/crew-specialist', function (req, res) {
    res.render('crew-specialist')
})

// --------------> CREW SECTIONS < --------------------

app.get('/technology-vehicle', function (req, res) {
    res.render('technology-vehicle')
})
app.get('/technology-spaceport', function (req, res) {
    res.render('technology-spaceport')
})
app.get('/technology-capsule', function (req, res) {
    res.render('technology-capsule')
})





app.listen(port, function() {
console.log('listening on port ' + port)
})