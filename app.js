const Robot = require("./robot");

const input = process.argv[2].split("\n");
console.log(input);

const gridInput = input[0];
const gridSize = gridInput.split(" ");
if(gridSize.some(x => x >50 || x < 2)) {
    const invalidGridMsg = "Invalid grid size. Size should be between 2x2 and 50x50.";
    throw invalidGridMsg;
}

console.log(gridSize);

const robotsInput = input.slice(1);

const robotsInfo = robotsInput.reduce((ac, cv, idx, arr) => {
    if(idx % 2 === 0) {
        ac.push(arr.slice(idx, idx + 2).join(" ").split(" "));
    }
    return ac;
}, []);

console.log(robotsInfo);

robotsInfo.forEach(robotInfo => {
    const robot = new Robot(robotInfo);
    console.log(robot.posY);
    console.log(robot.instructions);
});