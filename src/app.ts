import express from "express"
import movieRouter from "./routes/movieRouter"
import celebrityRouter from "./routes/celebrityRouter"
import userRouter from "./routes/userRouter"
import reviewRouter from "./routes/reviewRouter"
import cors from "cors"


const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}))

app.use('/celebrity',celebrityRouter)
app.use('/movie',movieRouter)
app.use('/user',userRouter)
app.use('/review',reviewRouter)

app.listen(port,()=>{
    console.log(`server started on port : ${port}`)
})