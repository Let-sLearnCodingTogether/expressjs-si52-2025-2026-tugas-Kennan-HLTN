import express from "express";
import api from "./routes/api.js";
import database from "./config/database.js";
import passport from "passport";
import "./config/passport.js";

const app = express();

app.use(express.json());
app.use("/api", api);
app.use(express.static('public'));
app.use(passport.initialize());


app.listen(3000, () => {
    database();
    console.log("Application is running in http://localhost:3000");
});
