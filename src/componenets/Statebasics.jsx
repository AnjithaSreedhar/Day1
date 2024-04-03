import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name="ANJITHA"
    var [name,setName] =useState("ANJITHA")
    var [value,setValue] =useState()
    const changeName = () => {
        console.log("Clicked")
        setName("ANJITHA")
        setName(value)
    }
    const inputHandler = (e) =>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
  return (
    <div>
        <Typography variant='h5'>WELCOME {name}</Typography>
        <TextField label="Enter name" variant='outlined' onChange={inputHandler}></TextField><br/><br/>
        <Button variant='contained' color='error' onClick={changeName}>CHANGE</Button>
        
    </div>
  )
}

export default Statebasics