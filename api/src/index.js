import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './dbConnection';
import routes from './controllers';

connectDb();

dotenv.config();

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// init routes
app.use('/', routes);

const { PORT } = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server is running on port ${PORT}`);
});
