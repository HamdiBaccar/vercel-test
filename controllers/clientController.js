const Client = require('../Models/Client');

//POST
exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Could not create client.' });
  }
};

//GET
exports.getClient = async (req, res) => {
  try {
    console.log('getClient function called');

    const clientID = req.params.clientID;
    console.log('ClientID:', clientID);

    const client = await Client.findOne({ ClientID: clientID });
    if (client) {
      res.json(client);
    } else {
      res.status(404).json({ error: 'Client not found.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error retrieving client.' });
  }
};


//PUT
exports.updateClient = async (req, res) => {
  try {
    const clientID = req.params.clientID;
    const updatedClient = await Client.findOneAndUpdate(
      { ClientID: clientID },
      req.body,
      { new: true }
    );
    if (updatedClient) {
      res.json(updatedClient);
    } else {
      res.status(404).json({ error: 'Client not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating client.' });
  }
};

//DELETE
exports.deleteClient = async (req, res) => {
  try {
    const clientID = req.params.clientID;
    const deletedClient = await Client.findOneAndDelete({ ClientID: clientID });
    if (deletedClient) {
      res.json({ message: 'Client deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Client not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting client.' });
  }
};
