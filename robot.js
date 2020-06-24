const { grid } = require("./app");

class Robot {
    constructor(robotInfo) {
        const [posX, posY, orientation, instructions] = robotInfo;
        this.posX = posX;
        this.posY = posY;
        this.orientation = orientation;
        this.instructions = instructions;
        this.lost = false;
    }

    checkCoordinates() {
        if (
            this.posX > grid.sizeX ||
            this.posY > grid.sizeY ||
            this.posX < 0 ||
            this.posY < 0
        ) {
            const invalidCoordinatesMsg = `Invalid coordinates given for robot. The grid's size is ${grid.sizeX}x${grid.sizeY}`;
            throw invalidCoordinatesMsg;
        }
    }

    checkInstructions() {
        if (this.instructions.length >= 100) {
            const invalidLengthMsg = `Invalid instructions length. It should be less than 100 characters.`;
            throw invalidLengthMsg;
        }
        const isInvalidInstruction = new RegExp("[^LRF]").test(this.instructions);
        if (isInvalidInstruction) {
            const invalidInstructionMsg = `Invalid instruction provided. Only valid instructions are: L, R, F.`;
            throw invalidInstructionMsg;
        }
    }
}

module.exports = Robot;