import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div style={{margin:"70px"}}>
    <br/><Typography variant='h3'>REGISTRATION FORM</Typography>
    <TextField label="Enter Name" variant='outlined'/><br/><br/>
    <TextField label="Enter Password" type="password"variant='outlined'/><br/><br/>
    <Button variant='contained' color='error'>REGISTER</Button>
    </div>
  )
}

export default Registration