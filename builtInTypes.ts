// Easy as .ts file to write in typescript, it is a superset of javascript
// Can't run typescript as it has to be compiled into javascript

// Built in types
// NUMBER TYPE
let age = 24;
let weight: number = 74;

weight = 84;
weight = 64;
// Typescript yells coz we changed the type from Number to Boolean
weight = true;
weight = "160";

age = 25;
age = 15;
// Still yells at us coz it infers types
age = "25";

// General rule of thumb -> let typescript infer for something simple as above
// TYPE STRING
let myName = "Nisarg";
let myDogName: string = "Fred";

myName = true;
// Yells at us coz length returns a number
myName = "Laith Harb".length;
myName = "Laith Harb".length === 0;

// TYPE BOOLEAN
let isAwesome = false;
// Infers this as well
let isAwesome2 = "Laith Harb".length === 0;
// Could do this
let isBoring: boolean = true;
