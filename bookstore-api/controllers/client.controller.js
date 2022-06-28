import ClientService from "../services/client.service.js";
import validator from "email-validator";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.nome ||
      !client.email ||
      !client.senha ||
      !client.telefone ||
      !client.endereco
    ) {
      throw new Error(
        "The name, email, password, phone and address are requerired!"
      );
    }

    if (!validator.validate(client.email)) {
      throw new Error("The email is invalid!");
    }

    await ClientService.createClient(client);
    res.end();
    logger.info(`POST /client/info - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.clienteId ||
      !client.nome ||
      !client.email ||
      !client.senha ||
      !client.telefone ||
      !client.endereco
    ) {
      throw new Error(
        "The id, name, email, password, phone and address are requerired!"
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    await ClientService.deleteClient(req.params.id);
    res.end();
    logger.info(`DELETE /client - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info(`GET /clients`);
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info(`GET /clients`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getClient,
};
