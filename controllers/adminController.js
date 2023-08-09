const Admin = require('../Models/Admins');

// POST
exports.createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Could not create admin.' });
  }
};

// GET
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ AdminID: req.params.AdminID });
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ error: 'Admin not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving admin.' });
  }
};

// UPDATE
exports.updateAdmin = async (req, res) => {
  try {
    const AdminID = req.params.AdminID;
    const updatedAdmin = await Admin.findOneAndUpdate({ AdminID: AdminID }, req.body, {
      new: true,
    });
    if (updatedAdmin) {
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ error: 'Admin not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating admin.' });
  }
};

// DELETE
exports.deleteAdmin = async (req, res) => {
  try {
    const AdminID = req.params.AdminID;
    const deletedAdmin = await Admin.findOneAndDelete({ AdminID: AdminID });
    if (deletedAdmin) {
      res.json({ message: 'Admin deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Admin not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting admin.' });
  }
};
