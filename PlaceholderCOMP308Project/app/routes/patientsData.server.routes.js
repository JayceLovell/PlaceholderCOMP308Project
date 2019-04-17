const users = require('../controllers/users.server.controller');
const patientsData = require('../controllers/patientsData.server.controller');

module.exports = function (app) {
    app.route('/api/patientsData')
        .get(patientsData.listByID);
    app.route('/api/patientsData/:patientDataId')
        .get(patientsData.read)
        .put(users.requiresLogin, patientsData.hasAuthorization, patientsData.create)
        .post(users.requiresLogin, patientsData.hasAuthorization, patientsData.create)
    app.param('patientDataId', patientsData.patientDataByID);
};