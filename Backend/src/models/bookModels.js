import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    publishedDate: {
        type: Date
    },
    description:{
        type:String
    },
    coverImg:{
        type:String
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Book = mongoose.model('Book', bookSchema); 
export default Book;

