const Book = require("../models/bookModels");

const createBooks = async (req, res) => {
    try {
        const { title, author, genre, year } = req.body;
        

        const newBook = new Book({
            title,
            author,
            genre,
            year
        });
        await newBook.save();
        res.status(201).json({ message: "Book created successfully", data: newBook });
    } catch (error) {
        res.status(400).json( {message: error.message});
    }
}

const getBooks = async (req, res) => { 
    try {
       const books = await Book.find();
       res.status(200).json({ data: books }); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);   
        if (!book) {
          return  res.status(404).json({ message: `Book with id ${id} not found` });
        }
        res.status(200).json({ data: book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateBooks = async (req, res) => {
    try {
        const books = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Book updated successfully", data: books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBooks = async (req, res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json({ message: "Book deleted successfully", data: books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createBooks,
    getBooks,
    getBookById,
    updateBooks,
    deleteBooks
}