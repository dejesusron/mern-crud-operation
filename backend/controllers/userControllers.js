import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc: display all of the users
// @route: GET /api/cars
// @access: Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc: display a user
// @route: GET /api/cars/:id
// @access: Public
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  
  res.status(200).json(user);
});

// @desc: add a new user
// @route: POST /api/cars
// @access: Public
const addUser = asyncHandler(async (req, res) => {
  const { name, email, age } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, age });

  if (user) {
    res.status(201).json(user); 
  } else  {
      res.status(400);
      throw new Error('Invalid car data!');
  }

  res.status(200).json(user);
});

// @desc: update a user
// @route: PUT /api/cars/:id
// @access: Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

  res.status(200).json(updatedUser);
});

// @desc: delete a user
// @route: DELETE /api/cars/:id
// @access: Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.deleteOne();

  res.status(200).json(user);
});

export { 
    getUsers, 
    getUser,
    addUser, 
    updateUser, 
    deleteUser 
};