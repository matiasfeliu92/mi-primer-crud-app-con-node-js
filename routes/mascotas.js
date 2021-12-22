const express = require('express')
const router = express.Router()

const Mascota = require('../models/mascota')
router.get('/', async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error);
    }

})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body= req.body
    try {
        const mascotaDb= new Mascota(body)
        await mascotaDb.save()

        res.redirect('/mascotas')
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const mascotaDb = await Mascota.findOne({_id: id})
        console.log(mascotaDb)

        res.render('detalle', {
            mascota: mascotaDb,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: "no se encuentra el id seleccionado"
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const mascotaDb = await Mascota.findByIdAndDelete({ _id: id })

        if(mascotaDb) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'fallo eliminar!'
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const mascotaDb = await Mascota.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(mascotaDb)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })
    } catch (error) {
        console.log(error)

        res.json({
            estado: false,
            mensaje: 'Fallido'
        })
    }
})

module.exports = router