const mongoose = require('mongoose');
const PatientData = mongoose.model('PatientData');

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
    const patientData = new PatientData(req.body);
    patientData.firstName = req.firstName;
    patientData.lastName = req.lastName;
    patientData.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientData);
        }
    });
};
exports.patientDataByID = function (req, res, next, id) {
    PatientData.findById(id).populate('userName', 'firstName lastName fullName').exec((err, patientData) => {
        if (err) return next(err);
        if (!patientData) return next(new Error('Failed to load patientData '
            + id));
        req.patientData = patientData;
        next();
    });
};
exports.read = function (req, res) {
    res.status(200).json(req.patientData);
};
exports.update = function (req, res) {
    const patientData = req.patientData;
    patientData.bodyTemperature = req.body.bodyTemperature;
    patientData.heartRate = req.body.heartRate;
    patientData.bloodPressure = req.body.bloodPressure;
    patientData.respiratoryRate = req.body.respiratoryRate;    
    patientData.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientData);
        }
    });
};
exports.list = function (req, res) {
    PatientData.find().sort('-created').populate('userName','firstName lastName fullName').exec((err, patientsData) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientsData);
        }
    });
};