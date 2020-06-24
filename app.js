const input = process.argv[2].split("\n");
console.log(input);

const gridInput = input[0];
const gridSize = gridInput.split(" ");
if(gridSize.some(x => x >50 || x < 2)) {
    const invalidGridMsg = "Invalid grid size. Size should be between 2x2 and 50x50.";
    throw invalidGridMsg;
}

console.log(gridSize);