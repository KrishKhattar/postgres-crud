import asyncHandler from "../utils/asyncHandler.js";
import { client } from "../config/database.js";

// Create user
const createUser = asyncHandler(async (req, res) => {
  const { name, id } = req.body;

  const insert_query = `INSERT INTO demotable (name, id) VALUES ($1, $2)`;

  client.query(insert_query, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Error inserting data into database",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data inserted successfully",
      });
    }
  });
});

// Read user
const readUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const select_query = `SELECT * FROM demotable where id = $1`;
  client.query(select_query, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Error reading data from database",
      });
    } else {
      res.status(200).json({
        success: true,
        data: result.rows,
      });
    }
  });
});

// Update user
const updateUser = asyncHandler(async (req, res) => {
  const { name, id } = req.body;
  const update_query = `UPDATE demotable SET name = $1 WHERE id = $2`;
  client.query(update_query, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Error updating data in database",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data updated successfully",
      });
    }
  });
});

// Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const delete_query = `DELETE FROM demotable WHERE id = $1`;
  client.query(delete_query, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: "Error deleting data from database",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data deleted successfully",
      });
    }
  });
});

export { createUser, readUser, updateUser, deleteUser };
