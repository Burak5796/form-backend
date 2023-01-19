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
    currentTeam: {
        type: String
    },
    debut: {
        type: String
    },
    Team:{
        type: String
    },
    Number: {
        type: String,
        required: true
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