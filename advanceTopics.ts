let numberOrString = "Laith Harb";

numberOrString = "LeBron James";

// Yells at us coz infers as string
numberOrString = 24;

// UNION TYPE
let numberOrString2: string | number = "Laith Harb";
numberOrString2 = 4;
// yells at us
numberOrString2 = true;

let numberOrString3: string | number | boolean | undefined | null =
  "Laith Harb";
numberOrString3 = 4;
// fine now
numberOrString3 = true;

let array: (string | number | {})[] = ["", 4, null, undefined, {}];

let object: {
  hello: string | number;
};

///////////
// LITERAL TYPES
let rainbowColor = "red";

rainbowColor = "orange";

// This isn't a rainbow color but typescript doesn't know that and so it doesn't yell at us
rainbowColor = "pink";

let rainbowColor2: "red" | "orange" = "red";

rainbowColor2 = "orange";

// Type '"pink"' is not assignable to type '"red" | "orange"'.ts(2322)
rainbowColor2 = "pink";

// Literally want the number to be 4
let num: 4 = 4;
// Literally want the array to have one string
// let arr: ["hello"] -> need one element in array with string hello as type
let arr: ["hello"] = ["hello"];
// Argument of type '"hi"' is not assignable to parameter of type '"hello"'.ts(2345)
arr.push("hi");

// ENUMS
// better way to do litteral types and union types
enum RainbowTypes {
  RED,
  ORANGE,
  YELLOW,
  BLUE,
  INDIGO,
  VIOLET,
}

let rainbowColors2: RainbowTypes = RainbowTypes.RED;

// HOW TO MAKE THINGS OPTIONAL
// use question mark but if given type still has to be string
let obj: {
  property: string;
  property2?: string;
} = {
  property: "",
};
