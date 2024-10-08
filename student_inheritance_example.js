// Base class Person
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Method to display basic person details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
    }
}

// Derived class Student inheriting from Person
class Student extends Person {
    constructor(name, age, address, rollNo, course) {
        // Call the parent class constructor using super
        super(name, age, address);

        // Validate rollNo, if zero, throw an error
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.course = course;
    }

    // Overriding the displayDetails method from the Person class
    displayDetails() {
        // Call the parent class method using super (if needed)
        super.displayDetails(); // Optional, but demonstrates usage of super
        console.log(`Roll No: ${this.rollNo}, Course: ${this.course}`);
    }
}

// Demonstration and exception handling
try {
    // Creating an instance of Student
    const student1 = new Student('Shreyash', 20, 'Mumbai', 16, 'Computer Science');
    student1.displayDetails(); // Displaying student details

    // Example of erroneous data (rollNo is 0, which should throw an error)
    const student2 = new Student('Shyam', 23, 'Pune', 0, 'Mechanical Engineering');
    student2.displayDetails(); // This line won't execute due to the error
} catch (error) {
    console.error(`Error: ${error.message}`);
}
