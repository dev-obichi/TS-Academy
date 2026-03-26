const  Book = require("../models/book");
exports.creatBook = async (req, res) => res.json(await Book.create(req.body));

exports.getBooks = async (req, res) =>{
    const books = await Book.find().populate("authors");
};
exports.getBook = async (req, res) =>{
    const book = await Book.findById(req.paramss.id)
    .populate("authors")
    .populate("boorowedBy")
    .populate("issuedBy");
    res.json(book);
};

exports.updateBooks = async (req, res ) =>{
    res.json(await Book.findByIdUpdate(req.params.id,req.body,{new:tru}));
};

exports.deleteBook = async (req, res) =>{
    res.json(await Book.findByIdAndDelete(req.params.id));
};

exports.boorowBook = async (req, res )=>{
    const{studentId, attendantId, returnDate} = req.body;
    const book =await Book.findById(req.params.id);

    if (book.status==="OUT") return res.status(400).json({message:"Already borrowed"});

    book.status="OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = returnDate;

    await book.save();
    res.json(book);
};

exports.retunBook = async (req, res) =>{
    const book = await Book.findById(req.params.id);

    if (book.status ==="IN") return res.status(400).json({message:"Already returned"});
    
    book.status ="IN";
    book.borrowedBy =null;
    book.issuedBy = null;
    book.returnDate -= null;

    await book.save();
    res.json(book);
};