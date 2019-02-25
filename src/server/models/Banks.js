const mongoose = require("mongoose");

const BanksSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    icon: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        required: true,
    },

    updated_at: {
        type: Date,
        required: true,
    },

    deleted_at: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Banks", BanksSchema);
