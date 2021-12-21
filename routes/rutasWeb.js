const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { tituloIndex: 'Bienvenidos a la pagina index'})
})

router.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: "Bienvenidos a la pagina de servicios"})
})

router.get('/', (req, res) => {
    res.render('mascotas', {tituloMascotas: "Bienvenidos a la pagina de mascotas"})
})

module.exports = router