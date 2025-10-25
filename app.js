import express from "express";
import api from "./routes/api.js";
import database from "./config/database.js";
import passport from "passport";
import "./config/passport.js";
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use("/api", api);

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());


app.listen(3000, () => {
    database();
    console.log("Application is running in http://localhost:3000");
});

export default app;
