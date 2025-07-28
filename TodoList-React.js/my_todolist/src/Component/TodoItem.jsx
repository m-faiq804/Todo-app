import React from 'react'
import { Button} from '@mui/material'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <Button variant='contained' color='error' onClick={() => {onDelete(todo)}}>Delete</Button>
    </div>
  )
}
