import express from "express";
import path from "path";

import router from "./routes/Api.routes";

// Body Parser
const bodyParser = require("body-parser");

const {APP_PORT} = process.env;

// Objet express nommé "app"
const app = express();
// Appel de Mongoose et config de l'url et de l'authentification
const mongoose = require("mongoose");
const uri = "mongodb://mongo/trouvkach";
const connOptions = {
    useNewUrlParser: true,
    authsource: "admin",
    user: "dev",
    pass: "dev",
};
// Connection à la database

mongoose
    .connect(uri, connOptions)
    .then(() => console.log("connected"))
    .catch(err => console.log(err));

let db = mongoose.connection;
// Code qui permet les get depuis axios

app.get("/api", (req, res) => {
    let results = db.collection("banks").find({});

    console.log(results);
    res.send({results: results});
});

app.get("/api", (req, res) => {
    let results = db.collection("terminals").find({});

    console.log(results);
    res.send({results: results});
});
// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use("/api", router);
// Ecoute du port mentionné dans une variable créée plus haut.
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
