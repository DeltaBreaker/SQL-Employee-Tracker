const Prompt = require("../Prompt.js");
const SQLManager = require("../../SQLManager.js");
const tableFormat = require("console.table");
const CHOICE = "View All Roles";

class ViewRoles extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let results = await SQLManager.queryDatabase("SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles JOIN departments ON roles.department = departments.id;");
        console.table(results);
        return true;
    }
}

module.exports = ViewRoles;