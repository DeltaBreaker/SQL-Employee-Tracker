const Prompt = require("../Prompt.js");
const SQLManager = require("../../SQLManager.js");
const tableFormat = require("console.table");
const CHOICE = "View All Employees";

class ViewEmployees extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let results = await SQLManager.readFromDatabase(
            "SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department, roles.salary, concat(manager.first_name, ' ', manager.last_name) AS manager " +
            "FROM employees employee" +
            "JOIN roles ON roles.id = employee.role_id " +
            "JOIN departments ON roles.department = departments.id "+
            "JOIN employees manager ON employee.manager = manager.id"
            );
        console.table(results);
        return true;
    }
}

module.exports = ViewEmployees;