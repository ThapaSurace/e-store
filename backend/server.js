import express from 'express';
import { dbConnection } from './config/dbConnection.js';
import mongoose from 'mongoose';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import productRoute from './routes/product.route.js';
import orderRoute from './routes/order.route.js';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';

const app = express();

//database connection
dbConnection();

// This allows requests from http://localhost:3000 to access the server's resources
// Credentials such as cookies will be included in cross-origin requests
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://e-bookofstore.netlify.app', 'https://e-store-pi.vercel.app'],
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send('hello page');
});

//auth route
app.use('/api', authRoute);
//user route
app.use('/api', userRoute);

app.use('/api', productRoute);

app.use('/api', orderRoute);

// Listen for the 'open' event on the Mongoose connection
mongoose.connection.once('open', () => {
	console.log('Connected to mongo db');
	app.listen(4000, () => console.log('Server running on port 4000'));
});
