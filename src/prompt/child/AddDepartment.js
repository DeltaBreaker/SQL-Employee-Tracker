const Prompt = require("../Prompt.js");

const CHOICE = "Add Department";

class AddDepartment extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        
        return true;
    }
}

module.exports = AddDepartment;