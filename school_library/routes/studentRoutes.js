const router2 =require("express").Router();
const sctrl = require('../controllers/studentController');
router2.post("/", sctrl.createStudent);
router2.get("/", sctrl.getStudents);
router2.get("/:id", sctrl.getStudent);
module.exports = router2;