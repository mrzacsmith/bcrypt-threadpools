const express = require('express')
const bcrypt = require('bcrypt')

const app = express()

app.get('/', (req, res) => {
  bcrypt.hash('i love alexandra', 10, (err, hash) => {
    if (err) throw err
    res.json({ hash })
  })
})

const PORT = 4040
app.listen(PORT)
