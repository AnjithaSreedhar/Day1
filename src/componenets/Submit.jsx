import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Submit = () => {
  return (
    <div style={{marginTop:"80px"}}>
        <Typography variant='h3'>LOGIN PAGE</Typography> 
        <TextField label="Enter Name"variant='outlined'/><br/><br/>
        <TextField label="Enter Password"type="password" variant='outlined'/><br/><br/>
        <Button variant="contained" color="success">LOGIN</Button>
    </div>
  )
}

export default Submit