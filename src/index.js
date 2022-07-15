const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const tareasRouter = require('./routes/tareas');

const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use("/api", tareasRouter); 

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Connect to MongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas  🚀'))
.catch((error => console.log(error.message)));

app.listen(port, () => console.log("Server is running on port ", port));
