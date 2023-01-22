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
    },
    titles: {
        type: Number,
        required: true
    },
    finalsMVP: {
        type: Number,
        required: true
    }
});



const registerSchema = model('User',registerUser);
export default registerSchema;