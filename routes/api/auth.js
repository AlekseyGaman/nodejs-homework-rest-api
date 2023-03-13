const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

// router.post("/users/login");

// router.post("/users/logout");

// router.post("/users/current");

module.exports = router;
