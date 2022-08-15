const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

express()
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
