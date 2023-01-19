const express = require('express');
const router = express.Router();

const {
    getRentals,
    getRentalById,
    createRental,
    getUserRentals
} = require('../controllers/rentals');

router.get('', getRentals);
router.get('/me', getUserRentals);
router.get('/:rentalId', getRentalById);
router.post('', createRental);

module.exports = router;