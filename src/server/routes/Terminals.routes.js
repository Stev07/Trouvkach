import Terminals from "../models/Terminals";

const express = require("express");

let router = new express.Router();

router.get("/", (req, res) => {
    Terminals.find()
        .then(terminals => {
            res.status(200).json({terminals});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Terminals.findOne({_id: id})
        .then(terminal => {
            res.status(200).json({terminal});
        })
        .catch(err => {
            res.status(404).json({
                errors: [err.message],
            });
        });
});
