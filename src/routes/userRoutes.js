const express = require('express');
const userController = require('../controllers/userController');
const cacheMiddleware = require('../middleware/cacheMiddleware');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:id', cacheMiddleware, userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;