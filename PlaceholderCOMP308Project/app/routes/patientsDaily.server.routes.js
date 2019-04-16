const users = require('../controllers/users.server.controller');
const patientsDaily = require('../controllers/patientDaily.server.controller');

module.exports = function (app) {
    app.route('api/patientsDaily')
        .post(users.requiresLogin, patientsDaily.hasAuthorization, patientsDaily.create);
    app.route('/api/patientsDaily/:patientDailyId')
        .get(patientsDaily.read)
        .post(users.requiresLogin, patientsDaily.hasAuthorization, patientsDaily.create);
    app.param('patientDailyId', patientsDaily.patientDailyByID);
};