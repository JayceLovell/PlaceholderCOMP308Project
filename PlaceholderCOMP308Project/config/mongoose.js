// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db);

    // Load the 'User' model 
    require('../app/models/user.server.model');
    // Load the 'PatientData' model 
    require('../app/models/patientData.server.model');
    // Load the 'PatientDaily' model
    require('../app/models/patientDaily.server.model');
    // Load the 'PatientSymptom' model
    require('../app/models/patientSymptom.server.model');

    // Return the Mongoose connection instance
    return db;
};