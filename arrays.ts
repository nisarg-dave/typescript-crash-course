// const arrayOfString: string[] -> type is array of strings
const arrayOfString = ["string1", "string2", "string3"];

arrayOfString.push("string4");
// yells at us coz array is of type string and most of the time in arrays the types will be the same
// Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)
arrayOfString.push(true);

const arrayOfBooleans: boolean[] = [true, false, true];
arrayOfBooleans.push(true);

// Can do any types

// We should assign the type to array
// Coz in this example type is any and in most cases arrays will be empty to start
const arr = [];
arr.push(true);
arr.push("");
arr.push(5);

const arr2: string[] = [];
arr2.push(true);
arr2.push(5);
// doesn't complain here
arr2.push("");

// can also do something like this
const arr3: (string | number)[] = [];

// Defining an array of objects with keys also having types
const arrayOfObject: {
  name: string;
  age: number;
  gender: boolean;
}[] = [];

arrayOfObject.push({
  name: "",
  age: 2,
  gender: true,
});

// Infered by typescript as const arrayOfArrays: string[][] -> array that contains arrays that contains strings
const arrayOfArrays = [
  ["", "", ""],
  ["", ""],
];
