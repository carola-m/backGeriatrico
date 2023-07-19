const mongoose = require("mongoose");
const { array } = require("../../middlewares/upload.file");
const Schema = mongoose.Schema;

const abueloSchema = new Schema(
    {
        fechaIngreso: {type:String, required:true},
        nombre: {type:String, required:true},
        apellido: {type:String, required:true},
        documento: {type:String, required:true},
        fechaNacimiento: {type:String, required:true},
        nacionalidad: {type:String, required:true},
        prepaga: {type:String, required:true},
        numeroAfiliado: {type:String, required:true},
        estadoCivil:{type:String, required:true},
        servicioEmergencia: {type:String, required:true},
        telefonoEmergencia: {type:Number, required:true},
        autorizadoSalir: {type:String, required:true},
        nombreParientes: {type:String, require:true},
        documentoPariente: {type:String, require:true},
        parentezco: {type:String, required:true},
        domicilio: {type:String, required:true},
        telefono1: {type:Number, required:true},
        telefono2: {type:Number, required:false},
        telefono3: {type:Number, required:false},
        email:{type:String, required:true},
        imagen:[{type: String, required: false}]
    },
    {
        versionKey: false 
        }
)

const Abuelo = mongoose.model("abuelo", abueloSchema);
module.exports = Abuelo;