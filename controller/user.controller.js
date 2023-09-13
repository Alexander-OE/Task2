const User = require("../model/user");
const mongoose = require("mongoose");



const getAllUser = async (req, res) => {
  const user = await User.find();
  res.status(200).json({ user });
};



const createUser = async (req, res) => {
  try {
    // Check if a user with the same name already exists
    const existingUser = await User.findOne({ name: req.body.name });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this name already exists" });
    }

    // If no user with the same name exists, create and save the new user
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};




const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user;

    // Check if the idOrName parameter is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      user = await User.findById(id);
    } else {
      // If it's not a valid ObjectId, assume it's a name
      user = await User.findOne({ name: id });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const updateUser = async (req, res) => {
  const { id } = req.params;
  const searchCriteria = {};

  // Check if id is a valid ObjectId; if so, use it to search by _id
  if (mongoose.Types.ObjectId.isValid(id)) {
    searchCriteria._id = id;
  } else {
    // If not a valid ObjectId, assume it's a name and search by name
    searchCriteria.name = id;
  }

  try {
    const currentUser = await User.findOneAndUpdate(searchCriteria, req.body, {
      new: true,
    });

    if (!currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ currentUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};




const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user;

    // Check if the id parameter is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      user = await User.findByIdAndDelete(id);
    } else {
      // If it's not a valid ObjectId, assume it's a name
      user = await User.findOneAndDelete({ name: id });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createUser, getAllUser, updateUser, deleteUser, getUser };
