const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./database/db");
const cors = require("cors");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running!! on ${PORT}`);
});

const corsPolicy = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsPolicy));

// user routes
app.use("/api/user", require("./routes/userRoutes"));

module.exports = {
  connectDB,
};
