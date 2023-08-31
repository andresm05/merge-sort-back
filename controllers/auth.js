const { response } = require("express");
const { googleVerify } = require("../helpers/google-verify");

const User = require("../models/user");
const { generarJWT } = require("../helpers/generar-JWT");

const googleSignin = async (req, res = response) => {
  const googleToken = req.body.token;

  try {
    const { name, img, email } = await googleVerify(googleToken);

    let usuario = await User.findOne({ email });

    if (!usuario) {
      // Tengo que crearlo
      const data = {
        name,
        email,
        img,
      };

      usuario = new User(data);
      await usuario.save();
    }

    // Si el usuario en DB
    if (!usuario.state) {
      return res.status(401).json({
        msg: "Hable con el administrador, usuario bloqueado",
      });
    }

    // Generar el JWT
    const token = await generarJWT({
      email: usuario.email,
      name: usuario.name,
      img: usuario.img,
    });

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Token de Google no es válido",
      error: error.message,
    });
  }
};

//verificarJWT

const verifyJWT = async (req, res = response) => {
  const email = req.email;
  const name = req.name;
  const img = req.img;

  console.log(email, name, img);

  //generar el JWT
  const token = await generarJWT({ email, name, img });

  res.json({
    ok: true,
    token,
    email,
    name,
    img,
  });
};

module.exports = {
  googleSignin,
  verifyJWT,
};
