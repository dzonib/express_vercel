const express = require('express')

const app = express()
const product = require('./api/product')

app.use(express.json({ extend: false }))

app.use('/api/product', product)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('LISTENING ON PORT ' + PORT))
