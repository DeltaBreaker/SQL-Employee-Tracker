const Prompt = require("../Prompt.js");
const Input = require("inquirer");
const SQLManager = require("../../SQLManager.js");
const CHOICE = "Add Role";

class AddRole extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let departments = (await SQLManager.queryDatabase("SELECT * FROM departments")).map((i) => {
            return {
                name: i.name,
                value: i.id
            }
        });
        
        await Input.prompt([
            {
                type: "input",
                message: "Role Name:",
                name: "title"
            },
            {
                type: "input",
                message: "Role Salary:",
                name: "salary"
            },
            {
                type: "list",
                message: "Role Department:",
                choices: departments,
                name: "department"
            }
        ]).then(async function(response) {
            await SQLManager.queryDatabase(
                "INSERT INTO roles(title, salary, department) VALUES(?, ?, ?)",
                [response.title, response.salary, response.department]
            );
            console.log("Added " + response.title + " to the roles table.");
        });
        return true;
    }
}

module.exports = AddRole;