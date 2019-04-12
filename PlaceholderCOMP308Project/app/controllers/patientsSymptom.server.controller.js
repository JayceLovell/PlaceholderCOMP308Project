const mongoose = require('mongoose');
const PatientSymptom = mongoose.model('PatientSymptom');

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
    const patientSymptom = new PatientSymptom(req.body);
    patientSymptom.patientId = req.user;
    patientSymptom.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(patientSymptom);
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