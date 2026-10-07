// Object Types
const car : {type: string, model: string, year: number} = {
    type: "Sedan",
    model: "Toyota Camry",
    year: 2022
};

// console.log(car);
// console.log(car.type);
// console.log(car.model);
// console.log(car.year);

const plane : {type: string, model: string, year?: number} = {
    type: "Jet",
    model: "Boeing 747"
}; // the year is optional property. No need to defineit when creating the object.
plane.year = 2023;
// console.log(plane);
// console.log(plane.type);
// console.log(plane.model);
// console.log(plane.year);

// index signatures
const phoneBook: {[name: string]: number} = {};
phoneBook.jack = 9876543210;

//---Enums---// A special type that allows a variable to be one of a set of predefined constants.
enum Color {
    Red,
    Green,
    Blue
}

const favoriteColor: Color = Color.Red; // by default, the first value
//  in the enum is 0 then incremented by 1 for each subsequent value.
// console.log(favoriteColor);

// You can also assign custom values to enum members.
enum Status {
    Active = 1,
    Inactive = 0
}

const currentStatus: Status = Status.Active;
// console.log(currentStatus);

//you can also assign string values to enum members.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

const move: Direction = Direction.Up;
// console.log(move);
