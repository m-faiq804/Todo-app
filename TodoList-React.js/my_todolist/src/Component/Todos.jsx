import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  return (
    <div>
      <h2>Todo List</h2>
      {props.todos.length === 0? "No Todo display" : 
      props.todos.map((todo) =>{
        return <TodoItem key={todo.id} todo={todo} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}