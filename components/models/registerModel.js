import { Schema, model } from "mongoose";


const registerUser = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
});



const registerSchema = model('User',registerUser);
export default registerSchema;