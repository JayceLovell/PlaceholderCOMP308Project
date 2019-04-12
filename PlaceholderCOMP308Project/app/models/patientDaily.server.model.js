const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDailySchema = new Schema({
    patientId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    tip: String,
    dailyInformation: String,
    dateOfTip: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('PatientDaily', PatientDailySchema);