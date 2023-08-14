const ClientBadges = require('../Models/ClientBadges');

//POST
exports.createClientBadge = async (req, res) => {
  try {
    const clientBadge = new ClientBadges(req.body);
    await clientBadge.save();
    res.status(201).json(clientBadge);
  } catch (error) {
    res.status(500).json({ error: 'Could not create client badge.' });
  }
};

// GET
exports.getClientBadge = async (req, res) => {
  try {
    const clientBadge = await ClientBadges.findOne({ UserBadgeID: req.params.UserBadgeID });
    if (clientBadge) {
      res.json(clientBadge);
    } else {
      res.status(404).json({ error: 'Client badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving client badge.' });
  }
};

//UPDATE
exports.updateClientBadge = async (req, res) => {
  try {
    const userBadgeID = req.params.UserBadgeID;
    const updatedClientBadge = await ClientBadges.findOneAndUpdate(
      { UserBadgeID: userBadgeID },
      req.body,
      { new: true }
    );
    if (updatedClientBadge) {
      res.json(updatedClientBadge);
    } else {
      res.status(404).json({ error: 'Client badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating client badge.' });
  }
};

// DELETE
exports.deleteClientBadge = async (req, res) => {
  try {
    const userBadgeID = req.params.UserBadgeID;
    const deletedClientBadge = await ClientBadges.findOneAndDelete({ UserBadgeID: userBadgeID });
    if (deletedClientBadge) {
      res.json({ message: 'Client badge deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Client badge not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client badge.' });
  }
};
