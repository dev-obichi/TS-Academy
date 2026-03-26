const Author = require('../models/Author');
exports.createAuthor = async (req, res) => res.json(await Author.create(req.body));
exports.getAuthors  = async (req, res) => res.json(await Author.find());
exports.getAuthor = async (req, res ) => res.json(await Author.findById(req.params.id));
exports.updateAuthor = async (req, res) => res.json(await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.deleteAuthor = async (req, res) => res.json(await Author.findByIdAndDelete(req.params.id));