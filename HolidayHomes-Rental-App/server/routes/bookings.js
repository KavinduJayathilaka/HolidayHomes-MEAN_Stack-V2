const express = require('express');
const router = express.Router();
const {
    createBooking, getBookings, getUserBookings } = require('../controllers/bookings');
const { isUserRentalOwner } = require('../controllers/rentals');
const { onlyAuthUser } = require('../controllers/users');

// /api/v1/bookings?rental="8772392sad79das8d"
router.get('', getBookings)
router.post('', onlyAuthUser, isUserRentalOwner, createBooking);
router.get('/me', onlyAuthUser, getUserBookings)

module.exports = router;