const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookingSchema = new Schema({
    startAt: { type: Date, required: 'Starting date is required' },
    endAt: { type: Date, required: 'Ending date is required' },
    price: { type: Number, required: true },
    nights: { type: Number, required: true },
    guests: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rental: { type: Schema.Types.ObjectId, ref: 'Rental', required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Booking', bookingSchema);