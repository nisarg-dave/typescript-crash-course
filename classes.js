class Car {
  constructor(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;
  }
  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }
}

const myJaguar = new Car("Jaguar", "green", 2);
console.log(myJaguar);
myJaguar.describe();
