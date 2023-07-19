const { deleteFile } = require('../../middlewares/delete.file');
const Pariente = require("../models/pariente.model")


const getParientesByID = async(req, res) => {
    try {
        const {id} = req.params;
        const pariente = await Pariente.findById(id);
        if(!pariente){
           return res.status(404).json({message: 'No tenemos parientes con ese ID'}); 
        }
        return res.status(200).json(pariente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getParientes = async(req, res) => {
    try {
        const allParientes = await Pariente.find();
        return res.status(200).json(allParientes);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postParientes = async(req, res) => {
    try {
        console.log(req.file);
        const newPariente = new Pariente(req.body);
        if (req.file) {
            newPariente.foto = req.file.path;
        }
        const createdPariente = await newPariente.save();   
        return res.status(201).json(createdPariente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putParientes = async(req, res) => {
    try {
        const {id} = req.params;
        const putPariente = new Pariente(req.body);
        putPariente._id = id;
        if (req.file) {
            putPariente.foto = req.file.path;
        }
        const updatedPariente = await Pariente.findByIdAndUpdate(id, putPariente, {new: true});
        if(!updatedPariente){
            return res.status(404).json({message: 'No tenemos parientes con ese ID'}); 
         }
         if(updatedPariente.foto !== putPariente.foto){
            deleteFile(updatedPariente.foto);
        }
        return res.status(200).json(updatedPariente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteParientes = async(req, res) => {
    try {
        const {id} = req.params;
        const deletePariente = await Pariente.findByIdAndDelete(id);
        if(!deletePariente){
            return res.status(404).json({message: 'No tenemos parientes con ese ID'}); 
         }
        return res.status(200).json(deletePariente);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getParientesByID,getParientes, postParientes, putParientes, deleteParientes}