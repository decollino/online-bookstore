import SaleService from "../services/sale.service.js";

async function createSale(req, res, next) {
  try {
    let sale = req.body;
    if (sale.valor) {
      throw new Error(
        "The book sales value cannot be entered manually." +
          "The value that is registered in the book table will be obtained!"
      );
    }
    if (!sale.data || !sale.clienteId || !sale.livroId) {
      throw new Error("The date, client id and book id are requerired!");
    }

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
    res.send(
      await SaleService.getSales(
        req.query.clientId,
        req.query.bookId,
        req.query.authorId
      )
    );
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
