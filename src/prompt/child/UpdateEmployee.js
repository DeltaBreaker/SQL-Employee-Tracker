const Prompt = require("../Prompt.js");

const CHOICE = "Update Employee";

class UpdateEmployee extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        
        return true;
    }
}

module.exports = UpdateEmployee;