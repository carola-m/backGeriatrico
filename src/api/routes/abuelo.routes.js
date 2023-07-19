const express = require("express")
const {getAbuelosByID, postAbuelos, putAbuelos, deleteAbuelos, getAbuelos} = require("../controllers/abuelo.controller")
const { isAuth} = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const abueloRoutes = express.Router();


abueloRoutes.get("/",getAbuelos);
abueloRoutes.get("/id/:id",getAbuelosByID);
abueloRoutes.post("/", upload.array("images"),postAbuelos);
abueloRoutes.put("/:id", upload.array("images"),putAbuelos);
abueloRoutes.delete("/:id",deleteAbuelos);

module.exports = abueloRoutes