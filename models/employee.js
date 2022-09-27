
const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true

    }, email: {
        type: String,
        required: true

    },
    DOB: {
        type: Date,
        required: Date.now

    }
});

const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    )
);

module.exports = mongoose.model('Employee', employeeSchema);

//export { Tutorial };

