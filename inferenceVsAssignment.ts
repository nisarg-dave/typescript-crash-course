// Typescript infers this
let height = 160;
// General rule of thumb -> simple things should be inferred

// Now assignment
let amount;
// Typescript doesn't yell at us coz the type is any but we don't want that in typescript.
amount = 120;
amount = "Laith";
amount = true;
amount = [];
amount = {};

// In this case we do want to assign a type when we don't directly give a value.
let amount2: number;
amount2 = 120;
amount2 = "Laith";
amount2 = true;
amount2 = [];
amount2 = {};

// Can have multiple types
let amount3: number | string;
amount3 = 120;
amount3 = "Laith";
amount3 = true;
amount3 = [];
amount3 = {};
