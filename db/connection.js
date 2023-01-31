import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('strictQuery', true)

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/thai'

mongoose.connect(url, mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))

export default mongoose.connection
