const express = require('express');
const router = express.Router();
const TruckDriver = require('../models/TruckDriver');

// Создание нового водителя грузовика
router.post('/', async (req, res) => {
    try {
        const driver = new TruckDriver(req.body);
        await driver.save();
        res.status(201).json(driver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Получение всех водителей грузовиков
router.get('/', async (req, res) => {
    try {
        const drivers = await TruckDriver.find();
        res.json(drivers);
    } catch (err) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;