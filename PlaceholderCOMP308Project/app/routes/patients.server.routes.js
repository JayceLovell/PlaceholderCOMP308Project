const users = require('../../app/controllers/users.server.controller');
const patientInfo = require('../../app/controllers/patientInfo.server.controller');
//
module.exports = function (app) {
    app.route('/api/patientInfo')
        .get(patientInfo.list)
        .post(users.requiresLogin, patientInfos.create);
    app.route('/api/patientInfos/:patientInfoId')
        .get(patientInfos.read)
        .put(users.requiresLogin, patientInfos.hasAuthorization, patientInfos.
            update)
        .delete(users.requiresLogin, patientInfos.hasAuthorization, patientInfos.
            delete);
    app.param('patientInfoId', patientInfos.patientInfoById);
};
