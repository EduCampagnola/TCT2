const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    console.log("Paso por api");
    res.json(
        {
            "mensaje": "Hola mundo",
            "estado": "OK"
        }
    ).status(200);
});

getConnection = async () => {
    try {
        app.listen(3000, console.log("SERVER STARTED"));
    } catch (error) {
        console.log(error);
    }
}


console.log("Hola mundo!");

getConnection();