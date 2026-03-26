const router3 = require("express").Router();
const actrl = require("../controllers/attendantController");
router3.post("/", actrl.createAttendant);
router3.get("/",actrl.getAttendant);
module.exports=router3;