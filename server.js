const express = require('express')
const app = express()
// const cors = require("cors");
const path = require("path");
// app.use(cors());

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1
    res.json({ 'value': roll })
})

app.get('/api/roll/:count', (req, res) => {
    const count = parseInt(req.params.count)
    const rolls = []
    for (let i = 0; i < count; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1)
    }
    res.json({ 'value': rolls })
});

app.listen(port, () => console.log(
    `Diceroller API started on http://localhost:${port}`
))