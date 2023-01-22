import dotenv from 'dotenv'; dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './components/routes/router.js';



const app = express();
const PORT = 4000;
const URI = process.env.MONGO;


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());



mongoose.connect(URI)
    .then(() => console.log('connected to Database'))
    .catch(() => console.log('unable to connect to Database'));


mongoose.connection.on('error', console.log);






app.use(router);




app.listen(PORT,() => {
    console.log('Server runs at PORT: ', PORT);
})
