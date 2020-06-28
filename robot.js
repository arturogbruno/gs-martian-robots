const { grid } = require("./main");

class Robot {
    constructor(robotInfo, idx) {
        const [posX, posY, orientation, instructions] = robotInfo;
        this.posX = +posX;
        this.posY = +posY;
        this.orientation = orientation.toUpperCase();
        this.instructions = instructions.toUpperCase();
        this.lost = false;
        this.robotId = `Robot ${idx + 1}`;
        this.info = "";
    }

    operateRobot() {
        this.checkCoordinates();
        this.checkInstructions();
        this.readInstructions();
        this.showInfo();
        return this.info;
    }

    checkCoordinates() {
        if (
            this.posX > grid.sizeX ||
            this.posY > grid.sizeY ||
            this.posX < 0 ||
            this.posY < 0
        ) {
            const invalidCoordinatesMsg = `Invalid coordinates given for ${this.robotId} (X: ${this.posX}, Y: ${this.posY}). The grid's size is ${grid.sizeX}x${grid.sizeY}.`;
            throw invalidCoordinatesMsg;
        }
    }

    checkInstructions() {
        if (this.instructions.length >= 100) {
            const invalidLengthMsg = `Invalid instructions length for ${this.robotId}. It should be less than 100 characters.`;
            throw invalidLengthMsg;
        }
        const isInvalidInstruction = new RegExp("[^LRF]").test(this.instructions);
        if (isInvalidInstruction) {
            const invalidInstructionMsg = `Invalid instruction for ${this.robotId}. Only valid instructions are: L, R, F.`;
            throw invalidInstructionMsg;
        }
    }

    readInstructions() {
        this.instructions.split("").forEach(instruction => {
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
                this.orientation = instruction === "L" ? "W" : "E";
                break;
            case "E":
                this.orientation = instruction === "L" ? "N" : "S";
                break;
            case "S":
                this.orientation = instruction === "L" ? "E" : "W";
                break;
            case "W":
                this.orientation = instruction === "L" ? "S" : "N";
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
                this.posX === 0 ? this.checkScent() : this.posX--;
                break;
        }
    }

    checkScent() {
        const positionArr = [this.posX, this.posY];
        if (
            !grid.scents.some(scentArr =>
                scentArr.every((coord, idx) => coord === positionArr[idx])
            )
        ) {
            this.loseRobot();
        }
    }

    loseRobot() {
        grid.scents.push([this.posX, this.posY]);
        this.lost = true;
    }

    showInfo() {
        this.info = `${this.posX} ${this.posY} ${this.orientation}${this.lost ? " LOST" : ""}`;
        console.log(`* Final position ${this.robotId} --> ${this.info}`);
    }
}

module.exports = Robot;