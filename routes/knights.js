const express = require('express');
const router = express.Router();

const knights_controller = require('../controllers/knights');

router.post('/', knights_controller.new_knight);

router.get('/:id', knights_controller.get_knight);

router.get('/', knights_controller.get_all_knights);

router.put('/:id', knights_controller.update_nickname);

router.delete('/:id', knights_controller.delete_knight);

module.exports = router;
