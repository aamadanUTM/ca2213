import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.getConnection((err, conn) => {
  if (err) {
    console.error("Init connection error:", err.message);
    return;
  }
});

export default connection;
