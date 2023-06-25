import React from "react";

type TodoListPropsType = {
    value1: string,
    title: Array<TodoProps>
}
export type TodoProps = {
    id: number,
    title: string,
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    debugger
    return (
        <div>
            <h3>{props.value1}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.title.map(el=>{
                    return <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span>
                    </li>
                })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
