// Just a simple typescript file that demonstrates some basic concepts

// Common types
let aString: string = "jason";
let aNumber: number = 38;
let aBoolean: boolean = false;
let anArray: string[] = ["one", "two", "three"];
let aTuple: [number, string] = [1, "5"];

// Defining a Type Object
type Person = {
    name: string,
    age?: number; // optional
}

// Extending a type
type PersonExtended = Person & {
    gender: string,
}

// Defining an Interface
interface Animal {
    name: string,
    age?: number; // optional
}

// Extending an Interface
interface WaterAnimal extends Animal {
    hasGills: boolean,
}

// Note: Interfaces can extend types, Types can extend Interfaces

// Assigning an object to a variable
let harry: PersonExtended = {
    name: "Harry",
    age: 23,
    gender: "male"
}

// An array of people
let lotsOfPeople: PersonExtended[] = [harry, harry];

// unions of number and string
let union: string | number = "test";
union = 25;

// simple function
function printName(name: string) {
    console.log(name);
}

export {}
