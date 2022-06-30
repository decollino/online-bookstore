import Client from "../models/client.model.js";

async function createClient(client) {
  try {
    return await Client.create(client);
  } catch (err) {
    throw err;
  }
}

async function updateClient(client) {
  try {
    await Client.update(client, {
      where: {
        clienteId: client.clienteId,
      },
    });
    return await getClient(client.clienteId);
  } catch (err) {
    throw err;
  }
}

async function deleteClient(id) {
  try {
    return await Client.destroy({
      where: { clienteId: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getClients() {
  try {
    let clients = await Client.findAll();
    const newClient = clients.map((client) => {
      return delete client.dataValues.senha;
    });
    return clients;
  } catch (err) {
    throw err;
  }
}

async function getClient(id) {
  try {
    let client = await Client.findByPk(id);
    delete client.dataValues.senha;
    return client;
  } catch (err) {
    throw err;
  }
}

// test this function
// async function getClient(id) {
//   try {
//     return await Client.findByPk(id, {
//       attributes: { exclude: ["senha"] },
//     });
//   } catch (err) {
//     throw err;
//   }
// }

async function getClientByEmail(email) {
  try {
    return await Client.findOne({
      where: {
        email: email,
      },
      raw: true,
    });
  } catch (err) {
    throw err;
  }
}

async function validateClientsUserPassword(username, password) {
  try {
    console.log("username: ", username);
    console.log("password: ", password);
    let clients = await Client.findOne({
      where: {
        email: username,
        senha: password,
      },
    });
    if (clients) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } catch (err) {
    throw err;
  }
}

export default {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getClient,
  validateClientsUserPassword,
  getClientByEmail,
};
