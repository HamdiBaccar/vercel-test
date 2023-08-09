const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/', clientController.createClient);
router.get('/:clientID', clientController.getClient);
router.put('/:clientID', clientController.updateClient);
router.delete('/:clientID', clientController.deleteClient);

module.exports = router;
