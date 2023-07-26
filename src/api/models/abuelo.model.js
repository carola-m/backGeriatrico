const mongoose = require("mongoose");
const { array } = require("../../middlewares/upload.file");
const Schema = mongoose.Schema;

const abueloSchema = new Schema(
    {
        fechaIngreso: {type:String, required:false},
        perfil: {type:String, required:false},
        nombre: {type:String, required:false},
        apellido: {type:String, required:false},
        documento: {type:String, required:false},
        fechaNacimiento: {type:String, required:false},
        nacionalidad: {type:String, required:false},
        prepaga: {type:String, required:false},
        numeroAfiliado: {type:String, required:false},
        estadoCivil:{type:String, required:false},
        servicioEmergencia: {type:String, required:false},
        telefonoEmergencia: {type:Number, required:false},
        autorizadoSalir: {type:String, required:false},
        nombreParientes: {type:String, require:false},
        documentoPariente: {type:String, require:false},
        parentezco: {type:String, required:false},
        domicilio: {type:String, required:false},
        telefono1: {type:Number, required:false},
        telefono2: {type:Number, required:false},
        telefono3: {type:Number, required:false},
        email:{type:String, required:false},
        documentoFrente:{type: String, required: false},
        documentoDorso: {type: String, required: false},
        prepagaFrente: {type: String, required: false},
        prepagaDorso: {type: String, required: false},
        comentario: {type:String, require:false},
        estado: {type: String, required: false}
    },
    {
        versionKey: false 
        }
)

const Abuelo = mongoose.model("abuelo", abueloSchema);
module.exports = Abuelo;