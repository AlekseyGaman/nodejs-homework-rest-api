const { User } = require("../models/user");

const { ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.json({
    email: newUser.email,
    subscription: "starter",
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
