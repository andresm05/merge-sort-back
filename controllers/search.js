const { request, response } = require("express");
const User = require("../models/user");
const { mergeSort } = require("../helpers/merge-sort");

const search = async (req = request, res = response) => {
  const { term } = req.query;
  console.log(term);

  const regex = new RegExp(term, "i");
  const users = await User.find({
    $or: [{ name: regex }, { email: regex }],
  });

  usersSort = mergeSort(users);

  res.json({
    ok: true,
    results: usersSort,
  });
};

module.exports = {
  search,
};
