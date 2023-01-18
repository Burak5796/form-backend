import User from "../models/registerModel.js";


export const postOne = async (req,res) => {
    try {
        const user = req.body;
        const newUser = await User.insertMany(user);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).send(error)
    }
}



export const getUser = async (req,res) => {
    try {
        const allUser = await User.find();
        res.status(200).send(allUser);
    } catch (error) {
        res.status(400).json(error);
    }
}


export const getOneUser = async (req,res) => {
    try {
        const oneUser = await User.findOne({
            firstName: req.params.firstName
        });
        res.status(200).send(oneUser);
    } catch (error) {
        res.status(400).json(error);
    }
}