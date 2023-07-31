const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parienteSchema = new Schema(
    {
        nombre: {type:String, required:true},
        apellido: {type:String, required:true},
        documento: {type:Number, required:true},
        parentezco: {type:String, required:true},
        domicilio: {type:String, required:true},
        telefono1: {type:Number, required:true},
        telefono2: {type:Number, required:false},
        telefono3: {type:Number, required:false},
        email:{type:String, required:true},
        imagen:[{type: String, required: false}]
    },
    {
        timestamps: true
    }
)

const Pariente = mongoose.model("pariente", parienteSchema);
module.exports = Pariente;