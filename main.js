const init = input => {
    const gridInput = input[0];
    const gridSize = checkGridSize(gridInput);

    exports.grid = {
        sizeX: +gridSize[0],
        sizeY: +gridSize[1],
        scents: []
    }

    const robotsInput = input.slice(1);
    const checkedRobotsInput = checkCompleteInfo(robotsInput);

    const robotsInfo = checkedRobotsInput.reduce((ac, cv, idx, arr) => {
        if(idx % 2 === 0) {
            ac.push(arr.slice(idx, idx + 2).join(" ").split(" "));
        }
        return ac;
    }, []);

    const Robot = require("./robot");
    let result = [];

    robotsInfo.forEach((robotInfo, idx) => {
        const robot = new Robot(robotInfo, idx);
        result.push(robot.operateRobot());
    });
    return result;
}

const checkGridSize = gridInput => {
    const gridSize = gridInput.split(" ");
    if(gridSize.some(x => x > 50 || x < 2)) {
        const invalidGridMsg = "Invalid grid size. Size should be between 2x2 and 50x50.";
        throw invalidGridMsg;
    }
    return gridSize;
}

const checkCompleteInfo = robotsInput => {
    if(robotsInput.length % 2 !== 0) {
        const invalidInfoMsg = "Info provided for robots is incomplete.";
        throw invalidInfoMsg;
    }
    return robotsInput;
}

exports.checkGridSize = checkGridSize;
exports.checkCompleteInfo = checkCompleteInfo;
exports.init = init;