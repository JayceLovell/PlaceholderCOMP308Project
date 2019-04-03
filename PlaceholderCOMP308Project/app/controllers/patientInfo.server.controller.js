const mongoose = require('mongoose');
const PatientInfo = mongoose.model('PatientInfo');
//
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
//
exports.create = function (req, res) {
    const patientInfo = new PatientInfo(req.body);
    patientInfo.creator = req.user;
    patientInfo.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientInfo);
        }
    });
};
//
exports.list = function (req, res) {
    PatientInfo.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, patientInfos) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
    res.status(200).json(patientInfos);
    }
});
};
//
exports.patienInfoById = function (req, res, next, id) {
    PatientInfo.findById(id).populate('creator', 'firstName lastName fullName').exec((err, patientInfo) => {if (err) return next(err);
        if (!patientInfo) return next(new Error('Failed to load patientInfo '
        + id));
        req.patientInfo = patientInfo;
    next();
});
};
//
exports.read = function (req, res) {
    res.status(200).json(req.patientInfo);
};
//
exports.update = function (req, res) {
    const patientInfo = req.patientInfo;
    patientInfo.title = req.body.title;
    patientInfo.content = req.body.content;
    patientInfo.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientInfo);
        }
    });
};
//
exports.delete = function (req, res) {
    const patientInfo = req.patientInfo;
    patientInfo.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientInfo);
        }
    });
};
//The hasAuthorization() middleware uses the req.patientInfo and req.user objects
//to verify that the current user is the creator of the current patientInfo
exports.hasAuthorization = function (req, res, next) {
    if (req.patientInfo.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


