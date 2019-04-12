const users = require('../controllers/users.server.controller');
const patientsData = require('../controllers/patientsData.server.controller');

module.exports = function (app) {
    app.route('/api/patientView/:patientDataId')
        .get(patientsData.read)
    app.param('patientDataId', patientsData.patientDataByID);
};