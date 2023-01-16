const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev');

// routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

// models
const Rental = require('./models/rental');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to DB!')
});

// Middleware
app.use(bodyParser.json());

// const middleware = (req, res, next) => {
//   const isError = false;
//   console.log('Hello World!');
//   if (!isError) { 
//     req.someProp = "Hello World"
//     return next(); 
//   }

//   return res.status(422).send('We got error!');
// }

// app.use(middleware);

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => {
    console.log('Server is up and running on port: ', PORT);
})