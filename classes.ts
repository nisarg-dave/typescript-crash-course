class Car2 {
  model: string;
  color: string;
  age: number;
  private peopleInPolicy: string[] = [];
  // Don't want people to change the manufacture date and so specify that it is readonly
  readonly manufacutreDate: string = "2019-02-13";
  constructor(model, color, age) {
    this.model = model;
    this.color = color;
    this.age = age;
  }
  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }
  addToPolicy(name: string) {
    // Other logic
    this.peopleInPolicy.push(name);
  }
  getPolicy() {
    console.log(this.peopleInPolicy);
  }
}

const myJaguar2 = new Car2("jaguar", "green", 2);
myJaguar2.addToPolicy("nisarg");
// Also fine before adding private to class
myJaguar2.peopleInPolicy.push("Laith");
// But this is problematic because two ways to do the same thing and addtopolicy could have other logic
// Therefore, make it private which is typescript only so only inside class has access to it
// The other fields by default are public
myJaguar2.manufacutreDate = "10";
// Can also make readonly private
