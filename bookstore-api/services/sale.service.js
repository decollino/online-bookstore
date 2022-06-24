import SaleRepository from "../repositories/sale.repository.js";

async function createSale(sale) {
  await SaleRepository.createSale(sale);
}

async function updateSale(sale) {
  return await SaleRepository.updateSale(sale);
}

async function deleteSale(id) {
  // const animal = await AnimalRepository.getAnimalBySaleId(id);
  // if (animal) {
  //   throw new Error(
  //     "Forbidden deletion! There are animals registered for this sale!"
  //   );
  // } else {
  //   return await SaleRepository.deleteSale(id);
  // }
  return await SaleRepository.deleteSale(id);
}

async function getSales() {
  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

export default {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSale,
};
