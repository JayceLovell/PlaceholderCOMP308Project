const mongoose = require('mongoose');
const PatientDaily = mongoose.model('PatientDaily');

function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function (req, res) {
    const patientDaily = new PatientDaily(req.body);
    patientDaily.patientId = req.user;
    patientDaily.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(patientDaily);
        }
    });
};
exports.hasAuthorization = function (req, res, next) {
    if (req.user.isPatient === false) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};