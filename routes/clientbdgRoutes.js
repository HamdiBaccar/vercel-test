const express = require('express');
const router = express.Router();
const clientBadgesController = require('../controllers/clientBadgesController');

router.post('/', clientBadgesController.createClientBadge);

router.get('/:UserBadgeID', clientBadgesController.getClientBadge);

router.put('/:UserBadgeID', clientBadgesController.updateClientBadge);

router.delete('/:UserBadgeID', clientBadgesController.deleteClientBadge);

module.exports = router;
