const { deleteFile } = require('../../middlewares/delete.file');
const Abuelo = require("../models/abuelo.model")


const getAbuelosByID = async(req, res) => {
    try {
        const {id} = req.params;
        const abuelo = await Abuelo.findById(id);
        if(!abuelo){
           return res.status(404).json({message: 'No tenemos abuelos con ese ID'}); 
        }
        return res.status(200).json(abuelo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAbuelos = async(req, res) => {
    try {
        const allAbuelos = await Abuelo.find();
        return res.status(200).json(allAbuelos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postAbuelos = async(req, res) => {
    try {
        console.log(req.file);
        const newAbuelo = new Abuelo(req.body);
        if (req.file) {
            newAbuelo.foto = req.file.path;
        }
        const createdAbuelo = await newAbuelo.save();   
        return res.status(201).json(createdAbuelo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putAbuelos = async(req, res) => {
    try {
        const {id} = req.params;
        const putAbuelo = new Abuelo(req.body);
        putAbuelo._id = id;
        if (req.file) {
            putAbuelo.foto = req.file.path;
        }
        const updatedAbuelo = await Abuelo.findByIdAndUpdate(id, putAbuelo, {new: true});
        if(!updatedAbuelo){
            return res.status(404).json({message: 'No tenemos abuelos con ese ID'}); 
         }
         if(updatedAbuelo.foto !== putAbuelo.foto){
            deleteFile(updatedAbuelo.foto);
        }
        return res.status(200).json(updatedAbuelo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteAbuelos = async(req, res) => {
    try {
        const {id} = req.params;
        const deleteAbuelo = await Abuelo.findByIdAndDelete(id);
        if(!deleteAbuelo){
            return res.status(404).json({message: 'No tenemos abuelos con ese ID'}); 
         }
        return res.status(200).json(deleteAbuelo);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getAbuelosByID,getAbuelos, postAbuelos, putAbuelos, deleteAbuelos};