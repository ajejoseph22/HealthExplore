import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { MONGO_URL } = process.env;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connection
  .on('connected', () => {
    // eslint-disable-next-line
    console.log(`Connected to the database: ${MONGO_URL}`);
  })
  .on('disconnected', () => {
    // eslint-disable-next-line
    console.log(`Disconnected from the database: ${MONGO_URL}`);
  })
  .on('error', (error) => {
    // eslint-disable-next-line
    console.log(`Database connection error: ${MONGO_URL}`, error);
  });

export const connectDb = (URL) =>
  mongoose.connect(URL || MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

export function disconnectDb() {
  return mongoose.connection.close();
}
