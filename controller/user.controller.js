const User = require("../model/user");

const getUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};

const createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json({ msg: "User Created", data: newUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const currentUser = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ currentUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = { createUser, getUser, updateUser, deleteUser };
