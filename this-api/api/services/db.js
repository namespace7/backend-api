const mysql = require('mysql');
const datastores = sails.config.datastores;

const poolConfig = {
  connectionLimit: datastores.mysql['connectionLimit'] || 10,
  host: datastores.mysql['host'],
  user: datastores.mysql['user'],
  password: datastores.mysql['password'],
  database: datastores.mysql['database'],
  charset: datastores.mysql['charset']
};

const db = mysql.createPool(poolConfig);

// Query function which returns a Promise
db.queryPromise = async (query, params = []) => {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, params, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};



module.exports = db;
