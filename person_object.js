// Method 1: Using class keyword
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Regular method
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }

    // Arrow function as a member function
    sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Method 2: Function constructor
function PersonFunction(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    // Regular method
    this.displayDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    };

    // Arrow function as a member function
    this.sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
}

// Standalone arrow function (non-member)
const printPersonDetails = (person) => {
    console.log(`Person's Name: ${person.name}, Age: ${person.age}, Address: ${person.address}`);
};

// Using the class keyword
const person1 = new Person('Shreyash Dhekane', 20, 'India');
person1.displayDetails(); // Output: Name: John Doe, Age: 30, Address: 123 Main St
person1.sayHello();       // Output: Hello, my name is John Doe

// Using the function constructor
const person2 = new PersonFunction('Radhe Shyam', 35, 'India');
person2.displayDetails(); // Output: Name: Jane Doe, Age: 25, Address: 456 Park Ave
person2.sayHello();       // Output: Hello, my name is Jane Doe

// Using the standalone arrow function
printPersonDetails(person1); // Output: Person's Name: John Doe, Age: 30, Address: 123 Main St
