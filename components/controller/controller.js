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


export const getUserByCount = async (req,res) => {
    try {
        const oneUser = await User.find({
            titles: {$gte: 4},
            finalsMVP: {$gte: 4}
        });
        res.status(200).send(oneUser);
    } catch (error) {
        res.status(400).json(error);
    }
}



export const getUserByName = async (req,res) => {
    try {
        const name = await User.find({
            firstName: req.params.firstName
        })
        res.status(200).send(name)
    } catch (error) {
        res.status(400).json(error)
    }
}




export const deleteUserByName = async (req,res) => {
    try {
        const deleteData = await User.deleteMany({
            firstName: req.params.firstName
        })
        res.status(200).send(deleteData)
    } catch (error) {
        res.status(400).json(error)
    }
}



export const patchData = async (req,res) => {
    try {
        const data = await User.findOneAndUpdate({
            firstName: req.params.firstName
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

