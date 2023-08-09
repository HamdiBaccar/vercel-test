const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/badgeController');

// Badge CRUD routes
router.post('/', badgeController.createBadge);
router.get('/:BadgeID', badgeController.getBadge);
router.put('/:BadgeID', badgeController.updateBadge);
router.delete('/:BadgeID', badgeController.deleteBadge);

module.exports = router;
