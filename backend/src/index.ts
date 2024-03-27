import express,{Request, Response} from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/test",(req:Request, res:Response)=>{
    res.send({message : "hello"})
})

app.listen(3000,()=>{
    console.log(`Backend running at port ${3000}`)
    // mongoose.connect('mongodb://localhost:27017/' as string).then(()=>{
    //     console.log("db connected")
    // });
})