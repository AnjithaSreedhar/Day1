import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var[name,setName] = useState()

    const changehName = ()=>{
        setName("HOME")
    }
    const changegName = ()=>{
        setName("GALLERY")
    }
    const changecName = ()=>{
        setName("CONTACT")
    }
    useEffect(()=>{
        changehName()
    },[])
  return (
    <div>
        <Typography variant='h5' color='blue'>WELCOME TO {name}</Typography>
        <Button variant='contained' color='warning' onClick={changehName}>Home</Button>
        <Button variant='contained' color='error' onClick={changegName}>Gallery</Button>
        <Button variant='contained' color='success' onClick={changecName}>Contact</Button>
    </div>
  )
}

export default UseE