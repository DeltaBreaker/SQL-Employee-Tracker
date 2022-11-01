const Prompt = require("../Prompt.js");
const Input = require("inquirer");
const SQLManager = require("../../SQLManager.js");
const CHOICE = "Update Employee Role";

class UpdateEmployee extends Prompt {
    constructor() {
        super(CHOICE);
    }

    async prompt() {
        let employees = (await SQLManager.queryDatabase("SELECT * FROM employees")).map((i) => {
            return {
                name: i.first_name + " " + i.last_name,
                value: {
                    name: i.first_name + " " + i.last_name,
                    id: i.id
                }
            }
        });

        let roles = (await SQLManager.queryDatabase("SELECT * FROM roles")).map((i) => {
            return {
                name: i.title,
                value: i.id
            }
        });

        await Input.prompt([
            {
                type: "list",
                message: "Employee:",
                choices: employees,
                name: "employee"
            },
            {
                type: "list",
                message: "Role:",
                choices: roles,
                name: "role"
            }
        ]).then(async (response) => {
            await SQLManager.queryDatabase(
                "UPDATE employees " +
                "SET role_id = ? " +
                "WHERE id = ?;",
                [
                    response.role,
                    response.employee.id
                ]
            );
            console.log("Updated " + response.employee.name + " in the database.");
        });
        return true;
    }
}

module.exports = UpdateEmployee;