const { response } = require("express");
const User = require("../models/user");
const { mergeSort } = require("../helpers/merge-sort");

const getSortUsers = async (req, res = response) => {

    //get all users
    const users = await User.find();
    const sortUsers = mergeSort(users)

    res.status(200).json({
        ok: true,
        sortUsers
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
  getSortUsers,
  usersUpdate,
  usersPost,
  usersDelete,
};
