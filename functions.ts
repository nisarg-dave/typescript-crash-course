// Typescript infers this as const add: (num1: any, num2: any) => any
const add = (num1, num2) => {
  return num1 + num2;
};

// So this completely fine
add(true, {});

// const subtract: (num1: number, num2: number) => number
const subtract = (num1: number, num2: number) => {
  return num1 - num2;
};
subtract(4, 4);
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// Same thing should happen to true but because first param hasn't been resolved it doesn't yell
subtract("", true);

// When dealing with functions don't let Typescript infer the return type
// Just provide types for the params and return type
// In this case, you want to compare the two number but you accidentally add them
// const compare: (num1: number, num2: number) => number
const compare = (num1: number, num2: number) => {
  // Logic
  // return num1>num2
  return num1 + num2;
};

const compare2 = (num1: number, num2: number): boolean => {
  // Logic
  // return num1>num2
  return num1 > num2;
};

// const log: () => void
// New return type -> void which means nothing
const log = () => {
  console.log("hello");
};
