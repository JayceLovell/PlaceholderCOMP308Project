const users = require('../controllers/users.server.controller');
const patientData = require('../controllers/patientData.server.controller');

module.exports = function (app) {
    app.route('./api/patientData')
        .get(patientData.list)
        .post(users.requiresLogin, patientData.create);
    app.route('/api/patientData/:patientDataId')
        .get(patientData.read)
        .put(users.requiresLogin, patientData.update);
    app.param('patientDataId', patientData.patientDataByID);
};