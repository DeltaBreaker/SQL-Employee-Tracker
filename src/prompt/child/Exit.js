const Prompt = require("../Prompt.js");
const CHOICE = "Exit";

class Exit extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        return false;
    }
}

module.exports = Exit;