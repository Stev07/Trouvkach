const express = require("express");
const banksRouter = require("./Banks.router");
const terminalsRouter = require("./Terminals.router");

let router = new express.Router();

router.use("/banks", banksRouter);
router.use("/terminals", terminalsRouter);
