const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: 'This field is required.'
    },
    Description: {
        type: String
    },
    Sourcecity: {
        type: String
    },
    Destinationcity: {
        type: String
    }
});



mongoose.model('Employee', employeeSchema);