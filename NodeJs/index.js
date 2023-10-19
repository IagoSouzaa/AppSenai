const express = require('express');
const routes = express.Router();
const cors = require("cors");

const app = express();

routes.get("/", (req,res) => res.json("FUNCIONA"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server started"))