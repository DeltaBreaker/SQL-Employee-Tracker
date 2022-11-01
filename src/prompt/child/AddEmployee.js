const Prompt = require("../Prompt.js");
const Input = require("inquirer");
const SQLManager = require("../../SQLManager.js");
const CHOICE = "Add Employee";

class AddEmployee extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let roles = (await SQLManager.queryDatabase("SELECT * FROM roles")).map((i) => {
            return {
                name: i.title,
                value: i.id
            }
        });
        
        let employees = (await SQLManager.queryDatabase("SELECT * FROM employees")).map((i) => {
            return {
                name: i.first_name + " " + i.last_name,
                value: i.id
            }
        });
        employees.push({
            name: "None",
            value: null
        });

        await Input.prompt([
            {
                type: "input",
                message: "First Name:",
                name: "firstName"
            },
            {
                type: "input",
                message: "Last Name:",
                name: "lastName"
            },
            {
                type: "list",
                message: "Role:",
                choices: roles,
                name: "role"
            },
            {
                type: "list",
                message: "Manager:",
                choices: employees,
                name: "manager"
            }
        ]).then(async (response) => {
            await SQLManager.queryDatabase(
                "INSERT INTO employees(first_name, last_name, role_id, manager) VALUES(?, ?, ?, ?)",
                [
                    response.firstName,
                    response.lastName,
                    response.role,
                    response.manager
                ]
            );
            console.log("Added " + response.firstName + " " + response.lastName + " to the departments table.");
        });
        return true;
    }
}

module.exports = AddEmployee;