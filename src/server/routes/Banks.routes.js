import Banks from "../models/Banks";

const express = require("express");

let router = new express.Router();

router.get("/", (req, res) => {
    Banks.find()
        .then(banks => {
            res.status(200).json({banks: banks});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Banks.findOne({_id: id})
        .then(bank => {
            res.status(200).json({bank});
        })
        .catch(err => {
            res.status(404).json({
                errors: [err.message],
            });
        });
});

module.exports = router;
