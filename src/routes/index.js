const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Регистрация
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ username, password: hashedPassword });
    
    try {
        await user.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(400).send(error);
    }
});

// Аутентификация
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Поиск пользователя по имени
        const user = await User.findOne({ username });

        // Проверка на наличие пользователя
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Сравнение пароля
        const isMatch = await bcrypt.compare(password, user.password);

        // Если пароль не совпадает, вернуть ошибку
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Создание токена
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Установите время жизни токена

        // Возвращаем токен пользователю
        res.json({ token });
    } catch (err) {
        // Обработка ошибок
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
