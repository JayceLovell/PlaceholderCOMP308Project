const users = require('../controllers/users.server.controller');
const patientsSymptom = require('../controllers/patientsSymptom.server.controller');

module.exports = function (app) {
    app.route('/api/patientsSymptom/create')
        .post(users.requiresLogin, patientsSymptom.hasAuthorization, patientsSymptom.create);
    app.param('patientSymtomId', patientsSymptom.patientsSymptomID);
};