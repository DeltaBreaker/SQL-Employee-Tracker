const Prompt = require("../Prompt.js");
const SQLManager = require("../../SQLManager.js");
const tableFormat = require("console.table");
const CHOICE = "View All Departments";

class ViewDepartments extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        return true;
    }
}

module.exports = ViewDepartments;