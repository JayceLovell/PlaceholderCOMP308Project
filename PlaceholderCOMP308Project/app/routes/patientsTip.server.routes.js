const users = require('../controllers/users.server.controller');
const patientsTip = require('../controllers/patientsTip.server.controller');

module.exports = function (app) {
    app.route('/api/patientsTip').get(patientsTip.list).post(users.requiresLogin, patientsTip.list);
    app.route('/api/patientsTip/:patientDataId').get(patientsTip.read).put(users.requiresLogin, patientsTip.hasAuthorization, patientsTip.update)
    app.param('patientTipId', patientsTip.patientTipById);
};