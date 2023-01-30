const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev');
const { provideErrorHandler } = require('./middlewares');

// routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');
const { onlyAuthUser } = require('./controllers/users');
const bookingRoutes = require('./routes/bookings');


// models
const Rental = require('./models/rental');
const User = require('./models/user');
const booking = require('./models/booking');

const app = express();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to DB!')
});

// Middleware
app.use(bodyParser.json());
app.use(provideErrorHandler);
app.use(express.static(__dirname + '/public'))

app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
    const user = res.locals.user
    return res.json({ message: `Super secret message to: ${user.username}` })
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingRoutes);

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

module.exports = app.listen(PORT, () => {
    console.log('Server is up and running on port: ', PORT);
    console.log('Connected...')
})