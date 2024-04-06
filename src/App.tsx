import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  //example-1
  // let age: number = 25; //number
  // let height: number = 1.75; //number

  //example-2
  // const name: string = "John"; //string
  // const message: string = "Hello World"; //string

  //example-3
  // const getSpace = (num: number): string => `${num * 4}px`;

  //example-4
  // let value: string | null | number = "Hello World";
  // value = null;
  // value = 10;

  //example-5
  // const handleChange = (value: number): void => {
  //   //setState(value)
  //   // void — це тип даних, який означає відсутність поверненого
  //   // значення функцією та використовується лише в функціях
  // };

  //example-6
  // let data: object = {};

  // let person: { name: string; age: number | null; isStudent?: boolean } = {
  //   name: "John",
  //   age: 25,
  //   isStudent: true,
  // };

  //example-7 масиви, два синтаксиси
  // let numbers: Array<number> = [1, 2, 3, 4, 5];
  // let names: Array<string> = ["John", "Jane", "Mary"];
  // let mixed: Array<number | string> = [1, "hello", 3, "world"];
  // let nested: Array<Array<number>> = [[1, 2], [3, 4, 5], [6]];

  // Альтернативний синтаксис
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["John", "Jane", "Mary"];
  let mixed: (number | string)[] = [1, "hello", 3, "world"];
  let nested: number[][] = [[1, 2], [3, 4, 5], [6]];

  //example-8

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          {name} {message}
        </p>
        <p>
          {age} {height}
        </p> */}
        {/* <p>{getSpace(4)}</p> */}
        {/* <p>Hello World</p> */}
        {/* <p>{person.name}</p> */}
        <p>{numbers}</p>
        <p>{names}</p>
        <p>{mixed}</p>
        <p>{nested}</p>
      </header>
    </div>
  );
}

export default App;
