const { Router } = require("express");
const pessoasRoutes = require("./pessoasRoutes");

const routes = Router();

routes.use(pessoasRoutes);

module.exports = routes;
