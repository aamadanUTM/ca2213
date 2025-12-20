import {
  getAllUsersModel,
  getUserByIdModel,
  createUserModel,
} from "../model/user.model.js";
export const getAllUsers = (req, res) => {
  getAllUsersModel((err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  getUserByIdModel(userId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(results[0]);
  });
};

export const createUser = (req, res) => {
  const body = req.body;
  createUserModel(body, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database insert error" });
    }
    res
      .status(201)
      .json({ message: "User created successfully", userId: results.insertId });
  });
};
