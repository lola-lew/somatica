const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
  res.send('This is the homepage')
})

app.listen(3000, () => {
  console.log('ON PORT 3000');
})