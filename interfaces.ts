const obj: {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
} = {
  firstName: "Nisarg",
  lastName: "Dave",
  age: 22,
  gender: false,
};
// Above is very messy
// Use interfaces
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
}

const obj3: Person = {
  firstName: "Nisarg",
  lastName: "Dave",
  age: 22,
  gender: false,
};

// Can also do it like this
type PersonType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
};

const obj4: PersonType = {
  firstName: "Nisarg",
  lastName: "Dave",
  age: 22,
  gender: false,
};

// When to use interface vs type
// Interface is for objects
// Could use type for simple assignments
type PersonName = string;
const obj5: PersonName = "ssss";
// Also use type for array of objects
type newPersonType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: boolean;
}[];

const obj6: newPersonType = [
  {
    firstName: "Nisarg",
    lastName: "Dave",
    age: 22,
    gender: false,
  },
];
