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
    age: {
        type: String
    },
    jerseyNumber: {
        type: String
    },
    Team: {
        type: String,
        required: true
    }
});



const registerSchema = model('User',registerUser);
export default registerSchema;