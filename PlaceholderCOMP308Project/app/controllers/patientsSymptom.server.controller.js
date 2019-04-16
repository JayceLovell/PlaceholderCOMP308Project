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
exports.patientSymptomByID = function (req, res, next, id) {
    PatientSymptom.findById(id).populate('patientId', 'firstName lastName fullName').exec((err, patientSymptom) => {
        if (err) return next(err);
        if (!patientSymptom) return next(new Error('Failed to load patientSymptom '
            + id));
        req.patientSymptom = patientSymptom;
        next();
    });
};
//
exports.read = function (req, res) {
    res.status(200).json(req.patientSymptom);
};
exports.hasAuthorization = function (req, res, next) {
    if (req.user.isPatient === false) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};