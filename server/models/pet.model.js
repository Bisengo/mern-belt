console.log("pet.model.js");

const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer"],
        unique: true
    },

    ptype: {
        type: String,
        required: [true, "Pet must have a type"],
        minlength: [3, "Name must be 3 characters or longer"]
    },

    description: {
        type: String,
        required: [true, "Pet must have a description"],
        minlength: [3, "Name must be 3 characters or longer"]
    },

    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }

}, {timestamps: true});

PetSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Pet", PetSchema);