const { type } = require("node:os");

const BookSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    status:{type: String, enum: ["available", "borrowed"], default: "available"},
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        default: null
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attendant",
        default: null
    },
    returnDate: {type: Date, default: null}
}, { timestamps: true });

module.exports = mongoose.model("Book", BookSchema);