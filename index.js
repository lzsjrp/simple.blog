const express = require('express')
const app = express()

app.use('/api', require('./app/api'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Listening at 3000`)
})