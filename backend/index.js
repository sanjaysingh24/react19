import express from 'express'
import cors from 'cors'
import { connectDb } from './db/config.js';
import { userRouter } from './Routes/Router.js';
const app = express();
const PORT = 3001;

app.use(cors({
    origin:"*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRouter);
app.get('/',(req,res)=>{
    res.send('Hello World from Express.js backend!')
})
app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running on http://localhost:${PORT}`);
})