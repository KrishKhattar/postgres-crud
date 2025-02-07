import asyncHandler from "../utils/asyncHandler.js";
import { client } from "../config/database.js";

const registerUser = asyncHandler(async (req, res) => {
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

export default registerUser;
