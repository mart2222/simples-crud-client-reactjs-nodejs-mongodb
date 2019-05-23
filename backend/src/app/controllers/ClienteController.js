const express = require("express");
const Cliente = require("../models/cliente");

const router = express.Router();

router.get("/clientes", async (req, res) => {
  const { page } = req.query;
  const limit = 5;
  const paginacao = await Cliente.paginate({}, { page, limit });
  paginacao.perPage = limit;
  paginacao.lastPage = paginacao.total ? Math.ceil(paginacao.total / limit) : 1;
  res.json(paginacao);
});

router.get("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  res.json(cliente);
});

router.post("/clientes", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

router.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findOneAndUpdate({ _id: id }, req.body, {
    new: true
  });
  res.json(cliente);
});

router.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  await Cliente.findByIdAndRemove({ _id: id });
  res.send();
});

module.exports = app => app.use(router);
