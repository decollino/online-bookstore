import ClientRepository from "../repositories/client.repository.js";
import SaleRepository from "../repositories/sale.repository.js";
import basicAuth from "express-basic-auth";

async function createClient(client) {
  await ClientRepository.createClient(client);
}

async function updateClient(client) {
  return await ClientRepository.updateClient(client);
}

async function deleteClient(id) {
  const sales = await SaleRepository.getSaleByClientId(id);
  if (sales.length !== 0) {
    throw new Error(
      "Forbidden deletion! There are sales registered for this client!"
    );
  } else {
    return await ClientRepository.deleteClient(id);
  }
}

async function getClients() {
  return await ClientRepository.getClients();
}

async function getClient(id) {
  return await ClientRepository.getClient(id);
}

async function getClientByEmail(username) {
  return await ClientRepository.getClientByEmail(username);
}

async function verifyLogin(username, password) {
  const client = await ClientRepository.getClientByEmail(username);
  if (!client) {
    return false;
  }
  return basicAuth.safeCompare(client.senha, password);
}

export default {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getClient,
  getClientByEmail,
  verifyLogin,
};
