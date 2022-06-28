const { Router } = require("express");
const pessoasRoutes = require("./pessoasRoutes");
const turmasRoutes = require("./turmasRoutes");
const niveisRoutes = require("./niveisRoutes");

const routes = Router();

routes.use(pessoasRoutes);
routes.use(niveisRoutes);
routes.use(turmasRoutes);

module.exports = routes;
