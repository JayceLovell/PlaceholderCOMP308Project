﻿const mongoose = require('mongoose');
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
    patientData.patientId = req.user;
    patientData.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(patientData);
        }
    });
};
exports.listByID = function (req, res,next,id) {
    var query = { patientId: id };
    PatientData.find(query).exec((err, patientsData) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientsData);
        }
    });
};
exports.patientDataByID = function (req, res, next, id) {
    PatientData.findById(id).populate('patientId', 'firstName lastName fullName').exec((err, patientData) => {
        if (err)
            return next(err);
        if (!patientData) return next(new Error('Failed to load patient data '
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
exports.hasAuthorization = function (req, res, next) {
    if (req.user.isPatient===true) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};