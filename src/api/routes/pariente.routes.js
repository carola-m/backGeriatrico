const express = require("express")
const {getParientes,getParientesByID, postParientes, putParientes, deleteParientes} = require("../controllers/pariente.controller")
const upload = require("../../middlewares/upload.file");
const parienteRoutes = express.Router();


parienteRoutes.get("/",getParientes);
parienteRoutes.get("/id/:id",getParientesByID);
parienteRoutes.post("/", upload.array("images"),postParientes);
parienteRoutes.put("/:id", upload.array("images"),putParientes);
parienteRoutes.delete("/:id",deleteParientes);

module.exports = parienteRoutes;