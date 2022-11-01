const Prompt = require("../Prompt.js");

const CHOICE = "Add Employee";

class AddEmployee extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        
        return true;
    }
}

module.exports = AddEmployee;