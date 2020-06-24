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
        if(
            this.posX > grid.sizeX ||
            this.posY > grid.sizeY ||
            this.posX < 0 ||
            this.posY < 0
        ) {
            const invalidCoordinatesMsg = `Invalid coordinates given for robot. The grid's size is ${grid.sizeX}x${grid.sizeY}`;
            throw invalidCoordinatesMsg;
        }
    }
}

module.exports = Robot;