import express from 'express';
import { postOne, getUser, getOneUser } from '../controller/controller.js';

const router = express.Router();



router
    .route('/')
    .get(getUser)
    .post(postOne)


router
    .route('/user/:firstName')
    .get(getOneUser)





export default router;