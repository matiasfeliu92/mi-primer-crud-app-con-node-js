const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { tituloIndex: 'Bienvenidos a la pagina index'})
})

router.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: "Bienvenidos a la pagina de servicios"})
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

module.exports = router