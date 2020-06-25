const input = process.argv[2].split("\n");
console.log(input);

const gridInput = input[0];
const gridSize = gridInput.split(" ");
if(gridSize.some(x => x >50 || x < 2)) {
    const invalidGridMsg = "Invalid grid size. Size should be between 2x2 and 50x50.";
    throw invalidGridMsg;
}

console.log(gridSize);

exports.grid = {
    sizeX: +gridSize[0],
    sizeY: +gridSize[1],
    scents: []
}

const robotsInput = input.slice(1);
if(robotsInput.length % 2 !== 0) {
    const invalidInfoMsg = "Info provided for robots is incomplete.";
    throw invalidInfoMsg;
}

const robotsInfo = robotsInput.reduce((ac, cv, idx, arr) => {
    if(idx % 2 === 0) {
        ac.push(arr.slice(idx, idx + 2).join(" ").split(" "));
    }
    return ac;
}, []);

console.log(robotsInfo);

const Robot = require("./robot");

let result = [];

robotsInfo.forEach((robotInfo, idx) => {
    const robot = new Robot(robotInfo, idx);
    result.push(robot.operateRobot());
});

console.log(result);