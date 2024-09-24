import { Grid } from "./grid.js";

console.log("Det kører");

const grid = new Grid(5, 4);
grid.set(0, 0, "A0");
grid.set(1, 0, "B0");
grid.set(2, 0, "C0");
grid.set(3, 0, "D0");
grid.set(4, 0, "E0");

grid.set(0, 1, "A1");
grid.set(1, 1, "B1");
grid.set(2, 1, "C1");
grid.set(3, 1, "D1");
grid.set(4, 1, "E1");

grid.set(0, 2, "A2");
grid.set(1, 2, "B2");
grid.set(2, 2, "C2");
grid.set(3, 2, "D2");
grid.set(4, 2, "E2");

grid.set(0, 3, "A3");
grid.set(1, 3, "B3");
grid.set(2, 3, "C3");
grid.set(3, 3, "D3");
grid.set(4, 3, "E3");

grid.set(0, 4, "A4");
grid.set(1, 4, "B4");
grid.set(2, 4, "C4");
grid.set(3, 4, "D4");
grid.set(4, 4, "E4");
// console.log(grid.north(1, 0));
// console.log(grid.south(2, 0));
console.log(grid.west(1, 1));
console.log(grid.east(3, 2));
console.log(grid.indexFor(1, 0));
// console.log(grid.get(1,0));
console.log(grid.neighbours(1, 1));
//console.log(grid.neighboursValue(1,1));
console.log(grid.rowColFor(5));

grid.dump();