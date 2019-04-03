const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDataSchema = new Schema({
    patientFirstName: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    patientLastName: {
        type: Schema.ObjectId,
        ref: 'User'
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
        // Create a default 'created' value
        default: Date.now
    }
});
PatientDataSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});
mongoose.model('PatientData', PatientDataSchema);