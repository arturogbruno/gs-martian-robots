const { grid } = require("./app");

class Robot {
    constructor(robotInfo) {
        const [posX, posY, orientation, instructions] = robotInfo;
        this.posX = +posX;
        this.posY = +posY;
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
        const isInvalidInstruction = new RegExp("[^LRF]").test(
            this.instructions
        );
        if (isInvalidInstruction) {
            const invalidInstructionMsg = `Invalid instruction provided. Only valid instructions are: L, R, F.`;
            throw invalidInstructionMsg;
        }
    }

    readInstructions() {
        this.instructions.split("").forEach((instruction) => {
            if (!this.lost) {
                switch (instruction) {
                    case "L":
                        this.turn("L");
                        break;
                    case "R":
                        this.turn("R");
                        break;
                    case "F":
                        this.forward();
                        break;
                }
            }
        });
    }

    turn(instruction) {
        switch (this.orientation) {
            case "N":
                if (instruction === "L") {
                    this.orientation = "W";
                } else {
                    this.orientation = "E";
                }
                break;
            case "E":
                if (instruction === "L") {
                    this.orientation = "N";
                } else {
                    this.orientation = "S";
                }
                break;
            case "S":
                if (instruction === "L") {
                    this.orientation = "E";
                } else {
                    this.orientation = "W";
                }
                break;
            case "W":
                if (instruction === "L") {
                    this.orientation = "S";
                } else {
                    this.orientation = "N";
                }
                break;
        }
    }

    forward() {
        switch (this.orientation) {
            case "N":
                this.posY === grid.sizeY ? this.checkScent() : this.posY++;
                break;
            case "E":
                this.posX === grid.sizeX ? this.checkScent() : this.posX++;
                break;
            case "S":
                this.posY === 0 ? this.checkScent() : this.posY--;
                break;
            case "W":
                thisX === 0 ? this.checkScent() : this.posX--;
                break;
        }
    }

    checkScent() {
        const positionArr = [this.posX, this.posY];
        if (
            !grid.scents.some((scentArr) =>
                scentArr.every((coord, idx) => coord === positionArr[idx])
            )
        ) {
            this.loseRobot();
        }
    }

    loseRobot() {
        grid.scents.push([this.posX, this.posY]);
        this.lost = true;
        console.log(grid);
    }
}

module.exports = Robot;