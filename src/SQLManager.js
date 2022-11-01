const SQL = require("mysql2");
const DATABASE_NAME = "employee_db";
const DATABASE = SQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: DATABASE_NAME
    },
    console.log(`Connected to the ${DATABASE_NAME} database.`)
);

async function writeToDatabase() {

}

async function readFromDatabase(request, args) {
  let [rows] = await DATABASE.promise().query(request, args);
  return rows;
}

function close() {
  DATABASE.end();
}

module.exports = {
  writeToDataBase: writeToDatabase,
  readFromDatabase: readFromDatabase,
  close: close
}