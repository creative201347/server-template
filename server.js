require("dotenv").config();
const express = require("express");
const app = express();
const DbConnect = require("./db");
const router = require("./routes");

app.use(express.json({ limit: "8mb" }));
app.use(router);

DbConnect();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
