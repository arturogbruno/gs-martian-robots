const { checkGridSize, checkCompleteInfo, init } = require("./main");

describe("Testing checkGridSize function", () => {
    it("returns an array with grid size if input is correct", () => {
        expect(checkGridSize("5 3")).toStrictEqual(["5", "3"]);
    });

    it("throws error if invalid grid size is entered", () => {
        expect(() => checkGridSize("55 3")).toThrow();
    });
});

describe("Testing checkCompleteInfo function", () => {
    it("returns an array with entered info for robots", () => {
        expect(checkCompleteInfo(["1 2 N", "FRRF"])).toHaveLength(2);
    });

    it("throws error if incomplete info for robots is provided", () => {
        expect(() => init(["5 3", "1 2 N", "FR", "2 3 S"])).toThrow();
    });
});

describe("Testing init function", () => {
    it("returns an array with the final position and orientation when a robot moves", () => {
        expect(init(["5 3", "1 1 N", "RFLFLFLF"])).toStrictEqual(["1 1 S"]);  
    });

    it("returns and array with the final position and orientation of every robot moving", () => {
        expect(init(["5 3", "1 1 N", "RFLFLFLF", "3 2 E", "LFRFFRFR"])).toStrictEqual(["1 1 S", "5 2 W"]);  
    });

    it("returns an array with the final position and orientation along the word LOST if a robot get lost on North border", () => {
        expect(init(["5 3", "1 1 N", "FFF"])).toStrictEqual(["1 3 N LOST"]);  
    });

    it("returns an array with the final position and orientation along the word LOST if a robot get lost on East border", () => {
        expect(init(["5 3", "1 1 N", "RFFFFF"])).toStrictEqual(["5 1 E LOST"]);  
    });

    it("returns an array with the final position and orientation along the word LOST if a robot get lost on South border", () => {
        expect(init(["5 3", "1 1 N", "LLFF"])).toStrictEqual(["1 0 S LOST"]);  
    });

    it("returns an array with the final position and orientation along the word LOST if a robot get lost on West border", () => {
        expect(init(["5 3", "1 1 N", "LFF"])).toStrictEqual(["0 1 W LOST"]);  
    });

    it("should check if a robot doesn't get lost when another robot has left the grid at the same point", () => {
        expect(init(["5 3", "2 2 N", "FF", "3 2 W", "FRFFRFF"])).toStrictEqual(["2 3 N LOST", "4 3 E"]);  
    }); 
});