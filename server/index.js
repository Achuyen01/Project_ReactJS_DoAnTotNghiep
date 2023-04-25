const express = require('express')
const dotenv = require("dotenv");
const cors = require("cors")
const connectDatabase = require("./config/MongoDb.js");
const UserRouter = require('./router/User.js')

const app = express()
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
dotenv.config();
connectDatabase();
app.use(cors(corsOptions))

app.use(express.json())
app.use('/api/v1/users', UserRouter)

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server started on ${process.env.PORT}`)
);