const express = require('express');
const router = express.Router();
const TruckDriver = require('../models/TruckDriver');

router.post('/', async (req, res) => {
    try {
        const driver = new TruckDriver(req.body);
        await driver.save();
        res.status(201).json(driver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const drivers = await Truck.find();
        res.json(drivers);
    } catch (err) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const driver = await Truck.findById(req.params.id);
        if (!driver) return res.status(404).json({ message: 'Truck not found' });
        res.json(driver);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedDriver = await Truck.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDriver) return res.status(404).json({ message: 'Truck not found' });
        res.json(updatedDriver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedDriver = await Truck.findByIdAndDelete(req.params.id);
        if (!deletedDriver) return res.status(404).json({ message: 'Truck not found' });
        res.json({ message: 'Driver deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;