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
    patientData.patientId = req.user;
    patientData.patientUsername = req.body.username;
    patientData.patientFirstname = req.body.firstName;
    patientData.patientLastname = req.body.lastName;
    patientData.bodyTemperature = " ";
    patientData.heartRate = " ";
    patientData.respiratoryRate = " ";
    patientData.save((err) => {
        if (err) {
            console.log("got error in making patient Data");
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        //else {
        //    //res.status(200).json(patientData);
        //}
    });
};
exports.list = function (req, res) {
    PatientData.find().sort('-created').populate('patientId', 'firstName lastName fullName').exec((err, patientsData) => {
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
        if (err) return next(err);
        if (!patientData) return next(new Error('Failed to load article '
            + id));
        req.patientData = patientData;
        next();
    });
};
exports.read = function (req, res) {
    res.status(200).json(req.patientData);
    console.log("reading in controller");
    console.log("Test in controller " + req.patientData);
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
exports.delete = function (req, res) {
    const patientData = req.patientData;
    patientData.remove((err) => {
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
    //if (req.article.creator.id !== req.user.id) {
    //    return res.status(403).send({
    //        message: 'User is not authorized'
    //    });
    //}
    next();
};