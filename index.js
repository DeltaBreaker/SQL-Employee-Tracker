const Input = require("inquirer");
const PROMPT_PATH = "./src/prompt/child/";
const PROMPTS = [];
const CHOICES = [];

async function main() {
    let continuePrompt = true;
    while(continuePrompt) {
        await Input.prompt({
            type: "list",
            message: "Select an option below:",
            choices: CHOICES,
            name: "choice"
        }).then(async (response) => {
            continuePrompt = await PROMPTS[response.choice].prompt();
        });
    }
}

function setup() {
    require("fs").readdirSync(PROMPT_PATH).forEach(function(type) {
        let obj = require(PROMPT_PATH + type);
        let instance = new obj();
        PROMPTS.push(instance);
        CHOICES.push({
            name: instance.getChoice(),
            value: CHOICES.length
        });
    });
}

setup();
main();