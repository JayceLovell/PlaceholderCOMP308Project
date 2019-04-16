const users = require('../controllers/users.server.controller');
const patientsDaily = require('../controllers/patientDaily.server.controller');

module.exports = function (app) {
    app.route('api/patientsDaily/:patientId')
        .get(users.requiresLogin, patientsDaily.hasAuthorization, patientsDaily.create);
};