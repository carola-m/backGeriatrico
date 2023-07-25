const express = require("express")
const {getAbuelosByID, postAbuelos, putAbuelos, deleteAbuelos, getAbuelos} = require("../controllers/abuelo.controller")
const { isAuth} = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const abueloRoutes = express.Router();


abueloRoutes.get("/",getAbuelos);
abueloRoutes.get("/id/:id",getAbuelosByID);
abueloRoutes.post("/", upload.fields([{ name: 'perfil', maxCount: 1 }, { name: 'documentoFrente', maxCount: 1 }, { name: 'documentoDorso', maxCount: 1 }, { name: 'prepagaFrente', maxCount: 1 }, { name: 'prepagaDorso', maxCount: 1 }]),postAbuelos);
abueloRoutes.put("/:id", upload.fields(["perfil", "documentoFrente", "documentoDorso", "prepagaFrente", "prepagaDorso"]),putAbuelos);
abueloRoutes.delete("/:id",deleteAbuelos);

module.exports = abueloRoutes