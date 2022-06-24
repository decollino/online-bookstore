import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
  await ClientRepository.createClient(client);
}

async function updateClient(client) {
  return await ClientRepository.updateClient(client);
}

async function deleteClient(id) {
  const sale = await SaleRepository.getSaleByClientId(id);
  if (sale) {
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
