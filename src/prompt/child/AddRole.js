const Prompt = require("../Prompt.js");

const CHOICE = "Add Role";

class AddRole extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        
        return true;
    }
}

module.exports = AddRole;