import SaleService from "../services/sale.service.js";

async function createSale(req, res, next) {
  try {
    let sale = req.body;
    console.log("sale: ", sale);
    if (!sale.valor || !sale.data || !sale.clienteId || !sale.livroId) {
      throw new Error("The value, date, client id and book id are requerired!");
    }
    console.log("PASSOU");

    await SaleService.createSale(sale);
    res.end();
    logger.info(`POST /sale/info - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function updateSale(req, res, next) {
  try {
    let sale = req.body;
    if (
      !sale.vendaId ||
      !sale.valor ||
      !sale.data ||
      !sale.clienteId ||
      !sale.livroId
    ) {
      throw new Error(
        "The sale id, value, date, client id and book id are requerired!"
      );
    }
    sale = await SaleService.updateSale(sale);
    res.send(sale);
    logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSale(req, res, next) {
  try {
    await SaleService.deleteSale(req.params.id);
    res.end();
    logger.info(`DELETE /sale - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getSales(req, res, next) {
  try {
    res.send(await SaleService.getSales());
    logger.info(`GET /sales - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

async function getSale(req, res, next) {
  try {
    res.send(await SaleService.getSale(req.params.id));
    logger.info(`GET /sales - ${JSON.stringify(sale)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSale,
};
