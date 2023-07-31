const mongoose = require('mongoose');
const abuelo = require('../api/models/abuelo.model');
const dotenv = require("dotenv").config();

mongoose.connect(process.env.DB_URL)

.then(async () => {
    const allAbuelo = await abuelo.find();
    if (allAbuelo.length > 0){
       await abuelo.collection.drop();
       console.log('Tabla de abuelos borrada')
    }   
} )
.catch ( (error) => console.log("error borrando tabla de abuelos", error))
.finally ( () => mongoose.disconnect())
