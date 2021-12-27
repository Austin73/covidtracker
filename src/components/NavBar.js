import { Button, Input } from '@mui/material'
import React from 'react'
import '../styles/NavBar.css'
function NavBar() {
    return (
        <div className='NavBarContainer'>
           <div style={{flex:"1" ,marginLeft:'1rem',color:'white'}}>
           <h2>COVID 19</h2>
           </div>
           <div>
           <Button variant="text" >Home</Button>
           <Button variant="text">About</Button>
           <Button variant="text">Symptoms</Button>
           <Button variant="text">Prevention</Button>
           <Button variant="text">Contact</Button>
           </div>
         
         
        </div>
    )
}

export default NavBar
