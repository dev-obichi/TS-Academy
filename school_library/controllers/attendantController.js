const Attendant = require('..models/Attendant');
exports.createAttendant =async (req, res) => res.json(await Attendant.create(req.body));
exports.getAttendants = async (req, res) => res.json(await Attendant.find());