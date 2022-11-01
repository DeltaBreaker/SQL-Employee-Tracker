const SQL = require("mysql2");
const DATABASE_NAME = "";
const DATABASE = SQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: DATABASE_NAME
    },
    console.log(`Connected to the ${DATABASE_NAME} database.`)
);

function writeToDatabase() {

}