class Robot {
    constructor(robotInfo) {
        const [posX, posY, orientation, instructions] = robotInfo;
        this.posX = posX;
        this.posY = posY;
        this.orientation = orientation;
        this.instructions = instructions;
        this.lost = false;
    }
}

module.exports = Robot;