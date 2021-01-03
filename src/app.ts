import express , {Express} from 'express'
import mongoose, { Mongoose } from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes/index'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())

app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ovufr.mongodb.net/${process.env.MONGO_DB}retryWrites=true&w=majority`
const options = { userNewUrlParser: true, userUnifiedTopology: true}

mongoose.set('useFindAndModify', false)
mongoose
    .connect(uri, options)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`server running on PORT ${PORT}`)
        })
    })
    .catch(Error =>{
        throw Error
    })

