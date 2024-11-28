const express = require("express");
const router = express.Router();

const { all, create, update,  del } = require("../models");

//endpoints
router.get("/tareas", all);

router.post("/tareas", create);

router.put("/tareas/:id", update);

router.delete("/tareas/:id", del);

module.exports = router;
