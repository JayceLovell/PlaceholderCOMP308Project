const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDataSchema = new Schema({
    patientId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    patientUsername: {
        type: String
    },
    patientFirstname: {
        type: String
    },
    patientLastname: {
        type: String
    },
    bodyTemperature: {
        type: String
    },
    heartRate: {
        type: String
    },
    bloodPressure: {
        type: String
    },
    respiratoryRate: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});
PatientDataSchema.virtual('fullName').get(function () {
    return this.patientFirstname + ' ' + this.patientLastname;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.patientFirstname = splitName[0] || '';
    this.patientLastname = splitName[1] || '';
});
mongoose.model('PatientData', PatientDataSchema);