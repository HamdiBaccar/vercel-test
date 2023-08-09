const Badge = require('../Models/Badges');

// POST
exports.createBadge = async (req, res) => {
  try {
    const badge = new Badge(req.body);
    await badge.save();
    res.status(201).json(badge);
  } catch (error) {
    res.status(500).json({ error: 'Could not create badge.' });
  }
};

// GET
exports.getBadge = async (req, res) => {
  try {
    const badge = await Badge.findOne({ BadgeID: req.params.BadgeID });
    if (badge) {
      res.json(badge);
    } else {
      res.status(404).json({ error: 'Badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving badge.' });
  }
};

// UPDATE
exports.updateBadge = async (req, res) => {
  try {
    const badge = await Badge.findOneAndUpdate({ BadgeID: req.params.BadgeID }, req.body, {
      new: true,
    });
    if (badge) {
      res.json(badge);
    } else {
      res.status(404).json({ error: 'Badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating badge.' });
  }
};

//DELETE
exports.deleteBadge = async (req, res) => {
  try {
    const badge = await Badge.findOneAndDelete({ BadgeID: req.params.BadgeID });
    if (badge) {
      res.json({ message: 'Badge deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting badge.' });
  }
};


