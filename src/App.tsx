import React from 'react';
import './App.css';
import {TodoList, TodoProps} from "./TodoList";

function App() {

    return (
        <div className="App">
            <TodoList value1={'Запись 1'} title={tasks1}/>
            {/*<TodoList value1={'Запись 2'} title={tasks2}/>*/}
            {/*<TodoList value1={'Запись 3'} title={tasks3}/>*/}
            {/*<TodoList value1={'Запись 4'} title={tasks4}/>*/}
        </div>
    );
}


const tasks1: Array<TodoProps> = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "ReactJS", isDone: false},
    {id: 5, title: "ReactJS", isDone: false},
]
const tasks2: Array<TodoProps> = [
    {id: 1, title: "Hello world", isDone: true},
    {id: 2, title: "I am Happy", isDone: true},
    {id: 3, title: "Yo", isDone: false},
]
const tasks3: Array<TodoProps> = [
    {id: 1, title: "Hello world", isDone: true},
    {id: 2, title: "I am Happy", isDone: false},
    {id: 3, title: "Yo", isDone: false},
]
const tasks4: Array<TodoProps> = [
    {id: 1, title: "Hello world", isDone: true},
    {id: 2, title: "I am Happy", isDone: true},
    {id: 3, title: "Yo", isDone: false},
    {id: 4, title: "ReactJS", isDone: true}
]


export default App;
