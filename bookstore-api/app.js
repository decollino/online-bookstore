import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js";
import authorsRouter from "./routes/author.route.js";
import booksRouter from "./routes/book.route.js";
import salesRouter from "./routes/sale.route.js";
import basicAuth from "express-basic-auth";
import { authorizer, authorize } from "./controllers/auth.controller.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "bookstore-api.log" }),
  ],
  format: combine(label({ label: "bookstore-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(basicAuth({ authorizeAsync: true, authorizer }));
app.use("/client", clientsRouter);
app.use("/book", booksRouter);
app.use("/author", authorize("admin"), authorsRouter);
app.use("/sale", salesRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default app;
