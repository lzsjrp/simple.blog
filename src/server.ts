 import dotenv from 'dotenv';
dotenv.config();
 
import app from './app';
 
app.listen(3000, () => console.log('Listening at 3000'));