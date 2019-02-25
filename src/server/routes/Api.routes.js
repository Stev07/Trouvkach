const express = require("express");
const banksRouter = require("./Banks.routes");
const terminalsRouter = require("./Terminals.routes");

let router = new express.Router();

router.use("/banks", banksRouter);
router.use("/terminals", terminalsRouter);

export default router;
