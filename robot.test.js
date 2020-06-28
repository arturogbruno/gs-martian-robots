const Robot = require("./robot");

describe("testing the Robot class", () => {
    it("throws error if invalid position coordinates are provided", () => {
        const mockRobot = new Robot(["3", "8", "N", "LLF"], 1);
        const mockGrid = {
            sizeX: 5,
            sizeY: 3,
            scents: []
        };

        expect(() => mockRobot.checkCoordinates(mockGrid)).toThrow();
    });

    it("throws error if 100 or more instructions are provided", () => {
        const mockRobot = new Robot(["3", "8", "N", "LFLFRFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"], 1);
        expect(() => mockRobot.checkInstructions()).toThrow();
    });

    it("throws error if invalid instruction is provided", () => {
        const mockRobot = new Robot(["3", "8", "N", "LXD"], 1);
        expect(() => mockRobot.checkInstructions()).toThrow();
    });
});
