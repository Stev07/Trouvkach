const mongoose = require("mongoose");

const TerminalSchema = new mongoose.Schema({
    bank: {
        $oid: {
            type: String,
            required: true,
        },
    },

    latitude: {
        type: Number,
        required: true,
    },

    longitude: {
        type: Number,
        required: true,
    },

    adress: {
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

module.exports = mongoose.model("Terminals", TerminalSchema);
