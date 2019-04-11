const mongoose = require('mongoose');
const PatientTip = mongoose.model('PatientTip');

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
    const patientTip = new PatientTip(req.body);
    patientTip.patientTipId = req.user;
    patientTip.tip = " ";
    patientTip.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
    });
};
exports.list = function (req, res) {
    console.log("in patients Tip controller");
    PatientTip.find().sort('-dateOfTip').populate('patientTipId', 'tip').exec((err, patientsTip) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {;
            res.status(200).json(patientsTip);
        }
    });
};
exports.patientTipById = function (req, res, next, id) {
    PatientTip.findById(id).populate('patientTipId', 'tip').exec((err, patientTip) => {
        if (err)
            return next(err);
        if (!patientTip) return next(new Error('Failed to load patient tip' + id));
        req.patientTip = patientTip;
        console.log("patienTipById "+patientTip);
        next();
    });
};
exports.read = function (req, res) {
    res.status(200).json(req.patientTip);
};
exports.update = function (req, res) {
    const patientTip = req.patientTip;
    patientTip.tip = req.body.tip;
    patientTip.dateOfTip = Date.now();
    patientTip.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(patientTip);
        }
    });
};
exports.hasAuthorization = function (req, res, next) {
    next();
};