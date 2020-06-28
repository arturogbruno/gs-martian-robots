# Martian Robots

This is a NodeJS app to operate robots on the Mars' surface from your terminal. How cool is that!

### 🚀 &nbsp; Run the project
1. Clone or download this repository.

2. In order to operate the robots your have to provide:
    - The grid's size (x, y). Maximum value is 50.
    - The initial position, orientation (N, S, E, W) and instructions for each robot. The only valid instructions are L (left), R (right) and F (forward). The instructions should be less than 100 characters long.

This information should be provided with the following format:

```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

Being the first line the grid size and each subsequent pair of lines include the info for a robot: initial position and orientation, and instructions on the other line.

3. To run the app you have to enter ***node app.js*** followed by the required info. Example:
```
node app.js "5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL"
```


### 🧪 &nbsp; Run the tests
1. Open your terminal, go to the ***/*** folder and enter ***npm i***.

2. From the ***/*** folder run ***npm test***.


---
**Arturo G. Bruno | June 2020**