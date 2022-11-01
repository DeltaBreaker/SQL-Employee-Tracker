const Prompt = require("../Prompt.js");
const Input = require("inquirer");
const SQLManager = require("../../SQLManager.js");
const CHOICE = "Add Department";

class AddDepartment extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        await Input.prompt({
            type: "input",
            message: "Department Name:",
            name: "title"
        }).then(async (response) => {
            await SQLManager.queryDatabase(
                "INSERT INTO departments(title, salary, department) VALUES(?)",
                response.title
            );
            console.log("Added " + response.title + " to the departments table.");
        });
        return true;
    }
}

module.exports = AddDepartment;