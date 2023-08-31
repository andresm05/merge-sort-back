const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { googleSignin, verifyJWT } = require("../controllers/auth");
const { validarJWT } = require("../middlewares/validar-JWT");

const router = Router();

router.post(
  "/google",
  [check("token", "El token de Google es obligatorio").not().isEmpty(),
  validarCampos],
  googleSignin
);

router.get(
  "/renew",
  validarJWT,
  verifyJWT);



module.exports = router;
