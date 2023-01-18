import express from 'express';
import { postOne, getUser,
        getUserByCount, getUserByName, 
        deleteUserByName, patchData }
from '../controller/controller.js';



const router = express.Router();


router
    .route('/')
    .get(getUser)
    .post(postOne)
    


router
    .route('/count')
    .get(getUserByCount)


router
    .route('/name/:firstName')
    .get(getUserByName)
    .delete(deleteUserByName)
    .patch(patchData)




export default router;