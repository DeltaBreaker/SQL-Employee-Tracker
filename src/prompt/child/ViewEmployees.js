const Prompt = require("../Prompt.js");
const SQLManager = require("../../SQLManager.js");
const tableFormat = require("console.table");
const CHOICE = "View All Employees";

class ViewEmployees extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let results = await SQLManager.readFromDatabase("SELECT employees.id, employees.firstName, employees.lastName, roles.role AS title, departments.name AS department, roles.salary, employees.manager FROM employees JOIN roles ON roles.id = employees.role JOIN departments ON roles.department = departments.id");
        console.table(results);
        return true;
    }
}

module.exports = ViewEmployees;