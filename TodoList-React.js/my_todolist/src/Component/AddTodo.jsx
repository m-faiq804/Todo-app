import React,{useState} from 'react'
import { Box,Typography,TextField, Button } from '@mui/material'

export const AddTodo = ({addTodo}) => {

  const [credentials,setCredentials] = useState({title : "",desc : ""})

  const submit = (e)=>{
    e.preventDefault();
    
    if(credentials.title.trim() === "" || credentials.desc.trim() === ""){
      alert("Can not blank!")
    }else{
      addTodo(credentials.title,credentials.desc)
      setCredentials({title : "",desc : ""})
    }
  }
  return (
    <Box
    onSubmit={submit}
    component="form"

    sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
    padding: 3,
    borderRadius: 2,
  }}
    >
      <Typography variant='h3'>Add Todo</Typography>
      <TextField label='Title' value={credentials.title} onChange={(e) => setCredentials({...credentials,title :  e.target.value})}/>
      <TextField label='Description' value={credentials.desc} onChange={(e) => setCredentials({...credentials,desc :  e.target.value})}/>
     <Button variant='contained' color='success' type='submit'>Add</Button>
    </Box>
  )
}
