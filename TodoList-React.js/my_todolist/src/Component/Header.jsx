import React from 'react'
import { AppBar,Toolbar,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
   <AppBar>
    <Toolbar>
      <Typography variant='h6' >
        <Link to='/' style={{textDecoration:"none",color:"white"}}>TodoList</Link>

        </Typography>
      <Button variant='inherit' component={Link} to='/'>Home</Button>
      <Button variant='inherit' component={Link} to='/about'>About</Button>
    </Toolbar>
   </AppBar>
  )
}
