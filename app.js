const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000

//Conexion a base de datos Mongo Db
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lz54k.mongodb.net/${process.env.DBNAME}retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/rutasWeb'))
app.use('/mascotas', require('./routes/mascotas'));

app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
})