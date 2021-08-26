import express, {Request, Response} from "express";

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});