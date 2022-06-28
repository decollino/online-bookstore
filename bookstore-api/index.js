import express from "express";
import cors from "cors";
import winston from "winston";
import ClientRouter from "./routes/client.route.js";
import AuthorRouter from "./routes/author.route.js";
import BookRouter from "./routes/book.route.js";
import SaleRouter from "./routes/sale.route.js";
import basicAuth from "express-basic-auth";
import clientRepository from "./repositories/client.repository.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "server-api.log" }),
  ],
  format: combine(label({ label: "server-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());

function getRole(username) {
  if (username === "admin") {
    return "admin";
    // } else if (username === "angelo") {
    //   return "role1";
  }
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    console.log(req.auth);
    if (req.auth.user) {
      const role = getRole(req.auth.user);
      if (isAllowed(role)) {
        next();
      } else {
        res.status(401).send("Role not allowed!");
      }
    } else {
      res.status(403).send("User not found!");
    }
  };
}

app.use(
  basicAuth({
    authorizer: (username, password) => {
      const userMatches = basicAuth.safeCompare(username, "admin");
      const pwdMatches = basicAuth.safeCompare(password, "desafio-igti-nodejs");
      if (userMatches && pwdMatches) {
        return userMatches && pwdMatches;
      }
      return clientRepository.validateClientsUserPassword(username, password);
    },
  })
);

app.use("/client", ClientRouter);
app.use("/author", AuthorRouter);
app.use("/book", BookRouter);
app.use("/sale", SaleRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3001, () => console.log("API Started!!"));
