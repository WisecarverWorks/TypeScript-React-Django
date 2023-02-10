import React from 'react';
import './App.css';

// the | means or 
// any type can be assigned to any variable
// let name: any;

// void type returns undefined, never returns nothing

// instead of any we can use unknown type 

// let name: unknown;

// let name: string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let paycheck: number[];
// let role: [number, string];
// let favoriteColors: Array<string>;

// let printName: Function;


// let printName: (name: string) => void;

// This is a tuple
// function printName(name: string) {
//   console.log(name);
// }

// printName("Kyle");

// The question mark makes the property optional
// type Person = {
//   name: string;
//   age?: number;
//   isStudent: boolean;
//   hobbies: string[];
//   paycheck: number[];
//   role: [number, string];
//   favoriteColors: Array<string>;
// };

// let lotsOfPeople: Person[]; // Array of Person objects

// // Object 
// let person: Person = {
//   name: "Kyle",
//   age: 30,
//   isStudent: false,
//   hobbies: ["Sports", "Cooking"],
//   paycheck: [65000, 75000, 85000],
//   role: [101, "admin"],
//   favoriteColors: Array<string>()
// };

// type X = {
//   a: string;
//   b: number;
// };

// type Y = {
//   c: string;
//   d: number;
// }

// type Y = X & {
//   c: string;
//   d: number;
// };

// let y: Y = {
//   c: "c",
//   d: 2
// };

// type XY = X & Y;


// Interface is a custom type that can be reused within the project
// interface Person extends X {
//   name: string;
//   age?: number;
//   isStudent: boolean;
//   hobbies: string[];
//   paycheck: number[];
//   role: [number, string];
//   favoriteColors: Array<string>;
// }

// interface Guy extends Person {
//   profession: string;

// }



function App() {
  return (
    <div className="App">
      Hello Youtube
    </div>
  );
}

export default App;
