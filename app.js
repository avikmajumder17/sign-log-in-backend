const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require(`${__dirname}/routes/userRoutes.js`);

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(cors({
    origin: "https://sign-log-in-backend.onrender.com",
    credentials: true
}));

app.use(express.json());

app.use("/api/v1/users", userRouter);

module.exports = app;