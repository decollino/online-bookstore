import ClientRepository from "../repositories/client.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

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

export default {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getClient,
};
