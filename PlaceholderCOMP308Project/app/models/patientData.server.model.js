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
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('PatientData', PatientDataSchema);