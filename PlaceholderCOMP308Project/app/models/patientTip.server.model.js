const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientTipSchema = new Schema({
    patientId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    tip: {
        type: String
    },
    dateOfTip: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('PatientTip', PatientTipSchema);