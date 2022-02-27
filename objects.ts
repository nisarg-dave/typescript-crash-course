// Type is of object but also specifies the keys and its types
const obj = {
  firstName: "Nisarg",
  lastName: "Dave",
  age: 22,
  phone: "222-222-222",
  gender: false,
};

// the first part defines the types including the keys -> second is the object itself
// Could do this through interfaces
const obj2: {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  gender: boolean;
} = {
  firstName: "",
  lastName: "",
  phone: "",
  age: 23,
  gender: true,
};

obj2.age = 34;
// yells at us
obj2.age = true;
// Name does not exist on type '{ firstName: string; lastName: string; phone: string; age: number; gender: boolean; }'.ts(2339)
obj2.name;

obj2.phone.length;
// Property 'length' does not exist on type 'number'.ts(2339)
obj2.age.length;
