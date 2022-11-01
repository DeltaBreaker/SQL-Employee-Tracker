const Prompt = require("../Prompt.js");

const CHOICE = "View All Departments";

class ViewDepartments extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt(response) {
        
        return true;
    }
}

module.exports = ViewDepartments;