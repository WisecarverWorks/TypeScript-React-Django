import React, {useState} from 'react';
import './App.css';

// Component imports
import InputField from './components/InputField';
import { Task } from './model';

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

// This function returns a JSX.Element 
// const App = () => {
//   return (
//     <div className="App">
//       Hello Youtube
//     </div>
//   );
// }

// export default App;
// }

// This function is a React 'Functional Component' written as React.FC
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       Hello Youtube
//     </div>
//   );
// }

// export default App;

// This Function can support all of the Typescript features
// const App: React.ReactNode=() => {

//   return (
//     <div className="App">
//       Hello Youtube
//     </div>
//   );
// };

// export default App;


// Const is a variable that cannot be reassigned, but the properties of the object can be changed
// Here we are using the useState hook to set the state of the variable
// const [task, setTask] = useState(initialState)

// Here we are using the useState hook to set the state of the variable but leaving the initial state blank
// pointed brackets are used to define the type of the variable
// we can use union types to define the type of the variable
// const [task, setTask] = useState<string | number>("");
// for an array of strings we can use the following
// const [task, setTask] = useState<string[]>([]);
// for an array of numbers we can use the following
// const [task, setTask] = useState<number[]>([]);
// for an array of objects we can use the following
// const [task, setTask] = useState<object[]>([]);
// for an array of any type we can use the following
// const [task, setTask] = useState<any[]>([]);



const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

// handleAdd is a function that takes no arguments and returns nothing
// event type in React Typescript is React.FormEvent<HTMLFormElement> or
// React.SyntheticEvent<HTMLFormElement>
// React.FormEvent<HTMLFormElement> is a generic type
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      // Here we are using the spread operator to add the new task to the tasks array
      // Date.now() is a function that returns the current time in milliseconds
      // Date.now() is used to generate a unique id for each task
    setTasks([...tasks, {id: Date.now(), task, isDone: false}]);
    // Here we are setting the task variable to an empty string after the task has been added to the tasks array
    setTask("");
    }
  };

  console.log(tasks)
  console.log(task)
  // passed*
  //* Here we are passing the task variable as a prop to the InputField component *//
  return (
    <div className="App">
      <span className="heading">Task Management</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
      {/* <TaskList /> */}
      {tasks.map((t) => {
        <li>{t.task}</li>
      })}
    </div>
  );
};

export default App;

