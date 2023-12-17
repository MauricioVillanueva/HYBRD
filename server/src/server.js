const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cookies = require("cookie-parser");
const fileUpload = require("express-fileupload");
const mercadopago = require("mercadopago");

const server = express();

mercadopago.configure({
	access_token: process.env.MP_TOKEN,
});

server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(cookies());
server.use(express.json());
server.use(cors());

server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

server.use("/api", router);

module.exports = server;
