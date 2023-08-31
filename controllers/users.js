const { response } = require("express");
const User = require("../models/user");

const usersGet = async (req, res = response) => {

    //get all users
    const users = await User.find();

    res.status(200).json({
        ok: true,
        users
    });

};

const usersUpdate = (req, res = response) => {
  res.json({
    ok: true,
    msg: "put API",
  });
};

const usersPost = (req, res = response) => {
  const { nombre, email } = req.body;

  res.json({
    ok: true,
    msg: "post API",
    nombre,
    email,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete API",
  });
};

module.exports = {
  usersGet,
  usersUpdate,
  usersPost,
  usersDelete,
};
