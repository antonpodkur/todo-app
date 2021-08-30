import express, {Request, Response} from "express";
import mongoose, { mongo } from 'mongoose';
import todoRoute from './routes/TodoRoute';
import cors from 'cors';

import url from './database/config';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/todos', todoRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
})

mongoose.connect(url,
    {
    }, () => console.log("DB is connected!"));

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});