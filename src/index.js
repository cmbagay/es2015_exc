import { choice , remove, length } from "./helpers.js"
import fruits from "./fruits.js"


const chosenFruit = choice(fruits);

console.log(`I'd like one ${chosenFruit}, please`);
console.log(`Here you go: ${chosenFruit}`);

remove(fruits, chosenFruit);

console.log(`Delicious! May I have another ${chosenFruit} please`);

console.log(`Sorry we are out of ${chosenFruit}, we have ${length(fruits)} fruits left`);

