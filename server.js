require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const animalRouter = require('./routes/zwierzeta') // do innej ścieżki: const postRouter = require('./routes/posts')
const userRouter = require('./routes/users')
const errorMiddleware = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 3000

// app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false})) // możliwość wysyłania parametrów do bazy danych z zakładki form w Thunder Client/Insomnia

//routes
app.use('/zwierzeta', animalRouter)
app.use('/users', userRouter)


app.get("/", (req, res) => {
    res.send('Witaj w API portalu adopcji zwierząt')
})

app.use(errorMiddleware);

// łączy z bazą danych MongoDB
mongoose
.connect(
    'mongodb+srv://' + 
    process.env.DB_USERNAME +
    ':' + 
    process.env.DB_PASSWORD +
    '@cluster0.kao8q9c.mongodb.net/Animals-API?retryWrites=true&w=majority')
.then( () => {
    app.listen(PORT, () => {
        console.log(`Serwer działa na porcie: ${PORT}`)
    });
    console.log('Connected to MongoDB')
}).catch( (error) => {
    console.log(error)
})