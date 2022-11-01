class Prompt {

    constructor(choice) {
        this.choice = choice;
    }

    getChoice() {
        return this.choice;
    }

    // This must be overriden
    async prompt() {
        throw new Error("Method must be overridden");
    }

}

module.exports = Prompt;