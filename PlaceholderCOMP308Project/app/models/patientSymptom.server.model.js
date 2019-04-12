const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSymptomSchema = new Schema({
    patientId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    headache: Boolean,
    dizziness: Boolean,
    fever: Boolean,
    stomachPains: Boolean,
    coughing: Boolean,
    runnyNose: Boolean,
    jointPain: Boolean
});
mongoose.model('PatientSymptom', PatientSymptomSchema);