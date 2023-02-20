import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoConnect from './src/config/db.config.js'
import router from "./src/routers/index.js";
import fileUploader from 'express-fileupload'

dotenv.config()

const PORT = process.env.PORT || 3000;


const app = express();
mongoConnect();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileUploader({ useTempFiles: true }))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "let's get started ",
        status: 200
    })
});

app.use('/api/v1', router)

app.use((req, res) => {
    res.status(404).json({
        message: "endpoint not found",
        status: 404
    })
})

app.listen(PORT, console.log(`server is running on PORT ${PORT}`))