// vairable declarations
let myVar = "test";
const myVar1 = "test";

// variable types
let _name: string = "foo";
let _age: number = 25;
let _address: string = `${_name} address is ph.`;
let _isTrue: boolean = false;
let _isNull: null = null;
let _isUndefined: undefined = undefined;
let _list1: number[] = [1, 2, 3, 4, 5];
let _list2: Array<number> = [1, 2, 3, 4, 5];
let _list3: Array<string> = ["1", "2", "3"];
let _list4: [string, number, string] = ["1", 2, "3"];

enum Color {
  red = 1,
  green = 4,
  blue,
}
let r: Color = Color.red;
let g: Color = Color.green;

let _any: any = "test";
_any = 1;
_any = true;

let _any1: unknown = 1;
(_any1 as object) = { name: "test" };

function HasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

let _multiType: number | string;
_multiType = 1;
_multiType = "1";

//  functions
function add(n1: number = 4, n2?: number): number {
  return n2 ? n1 + n2 : n1;
}

// interface
interface Transmission {
  type: string;
  speed: number;
}

interface Car {
  model: string;
  manufacture: string;
  transmission?: Transmission;
}

function carInfo(car: Car): string {
  return `car model ${car.model} with ${car.transmission.speed} speed, manufacture by ${car.manufacture}`;
}

let myCar = {
  model: "a3",
  manufacture: "audi",
  transmission: {
    type: "manual",
    speed: 4,
  },
};

// class
class CarClass {
  public model: string;
  protected tag: string = "car"; //Property 'tag' is protected and only accessible within class 'CarClass' and its subclasses.
  private number: number = 123; //Property 'number' is private and only accessible within class 'CarClass'

  constructor(model: string) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

class TransmissionClass extends CarClass {
  private t: string;

  constructor(n: string, t: string) {
    super(n);
    this.t = t;
  }

  getTag() {
    return this.tag;
  }
}

let myCarClass = new TransmissionClass("a3", "manual");

// --------------------------------------------------------------------------------------------

console.log(HasName(_any1)); //return true
console.log(typeof _multiType, _multiType);
console.log(add(1, 2)); //return 3
console.log(add(1)); //return 1
console.log(add()); //return 4
console.log(carInfo(myCar));
console.log(myCarClass.getModel());
console.log(myCarClass.getTag());
