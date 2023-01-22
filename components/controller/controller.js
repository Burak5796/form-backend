import User from "../models/registerModel.js";




// POST

export const postOne = async (req,res) => {
    try {
        const user = req.body;
        const newUser = await User.create(user);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).send(error)
    }
}



// GET

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
            titles: {$gte: 3},
            finalsMVP: {$gte: 1}
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


// DELETE

export const deleteUserByName = async (req,res) => {
    try {
        const deleteData = await User.deleteOne({
            firstName: req.params.firstName
        })
        res.status(200).send(deleteData)
    } catch (error) {
        res.status(400).json(error)
    }
}


export const deleteOneElement = async (req,res) => {
    try {
        const filter = {Team: req.params.lastName};
        const deleteData = Team;
        const deleteOne = await User.findOneAndDelete(filter,deleteData,{
        new: true
    })
        res.status(200).send(deleteOne)
    } catch (error) {
        res.status(400).json(error)
    }
}




// PATCH / UPDATE

export const patchData = async (req,res) => {
    try {
        const filter = {firstName: req.params.firstName};
        const update = {titles: req.body.titles, finalsMVP: req.body.finalsMVP, Team: req.body.Team};
        const data = await User.findOneAndUpdate(filter,update,{
            new: true
        });
        res.status(200).send(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

