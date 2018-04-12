const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
<<<<<<< HEAD
  .get('/coosl', (req, res) => res.send(cool()))
=======
  .get('/cools', (req, res) => res.send(cool()))
>>>>>>> 3b3ce8de7f79a666a2ad1ec7eae85f4be2ea3101
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
