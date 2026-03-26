const Student = require('../models/Student');
exports.createStudent = async (req, res) => res.json(await Student.create(req.body));   
exports.getStudents = async (req, res) => res.json(await Student.find());
exports.getStudents = async (req, res) => res.json(await Student.findById(req.params.id));