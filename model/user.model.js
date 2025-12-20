import connection from "../db/conn.js";

export const getAllUsersModel = (callback) => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const getUserByIdModel = (userId, callback) => {
  const query = "SELECT * FROM users WHERE id = ?";
  connection.query(query, [userId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const createUserModel = (data, callback) => {
  const query = "INSERT INTO users(username,password) values(?,?)";
  connection.query(query, [data.username, data.password], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
