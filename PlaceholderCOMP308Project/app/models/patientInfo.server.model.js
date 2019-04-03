const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientInfoSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    headache: {
        type: Boolean,
        default: false,
        required: 'headache cannot be blank'
    },
    fever: {
        type: Boolean,
        default: false,
        required: 'fever cannot be blank'
    },
    stomachache: {
        type: Boolean,
        default: false,
        required: 'fever cannot be blank'
    }
});
mongoose.model('PatientInfo', PatientInfoSchema);
