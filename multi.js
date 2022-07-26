const OS = require('os')
process.env.UV_THREADPOOL_SIZE = OS.cpus().length
const express = require('express')
const bcrypt = require('bcrypt')

const app = express()

app.get('/', (req, res) => {
  bcrypt.hash('i love alexandra', 2, (err, hash) => {
    if (err) throw err
    res.json({ hash, cpu: process.env.UV_THREADPOOL_SIZE })
  })
})

const PORT = 4040
app.listen(PORT)
