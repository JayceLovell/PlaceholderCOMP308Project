const users = require('../controllers/users.server.controller');
const patientsData = require('../controllers/patientsData.server.controller');

module.exports = function (app) {
    app.route('./api/patientsData')
        .get(patientsData.list)
        .post(users.requiresLogin, patientsData.create);
    app.route('/api/patientsData/:patientDataId')
        .get(patientsData.read)
        .put(users.requiresLogin, patientsData.update);
    app.param('patientDataId', patientsData.patientDataByID);
};