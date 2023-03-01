const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserSchema = require('./Models/UserSchema')
const userRoute = require('./Routes/UserRoute')

app.use(express.json())

mongoose.set('strictQuery', true)
//connect to DB
mongoose.connect('mongodb://127.0.0.1:27017', err=> err? console.log(err): console.log('DB is connected!'))

app.use('/api/users',userRoute)





const PORT = 5000;
app.listen(PORT, err=> err? console.log(err): console.log(`Server i s running on ${PORT}`))