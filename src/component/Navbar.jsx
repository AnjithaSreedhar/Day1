import { AppBar, Button, Table, TableBody, TableCell, TableHead, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography variant='h6'>Employee App</Typography> &nbsp; &nbsp;
        <Button variant='contained' color='success'>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>VIEW</Link>
        </Button>
        &nbsp; &nbsp;
        <Button variant='contained' color='error'>
        <Link to={'/add'} style={{textDecoration:'none',color:'white'}}>ADD</Link>
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar