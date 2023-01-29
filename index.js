const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const path = require("path");
const openAi = require("./routes/openaiRoute");
const PORT = process.env.PORT || 5000;

//enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", openAi);

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
