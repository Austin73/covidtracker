import { Button} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setNavButton } from '../actions'
import '../styles/NavBar.css'
function NavBar() {
    const dispatch = useDispatch()
    return (
        <div className='NavBarContainer'>
           <div style={{flex:"1" ,marginLeft:'1rem',color:'white'}}>
           <h2>COVID 19</h2>
           </div>
           <div>
           <Button variant="text" onClick={()=>{
               dispatch(setNavButton(1))
           }}>Home</Button>
           <Button variant="text" onClick={()=>{
               dispatch(setNavButton(2))
           }}>About</Button>
           <Button variant="text" onClick={()=>{
               dispatch(setNavButton(3))
           }}>Symptoms</Button>
           <Button variant="text" onClick={()=>{
               dispatch(setNavButton(4))
           }}>Prevention</Button>
           <Button variant="text" onClick={()=>{
               dispatch(setNavButton(5))
           }}>Contact</Button>
           </div>
         
         
        </div>
    )
}

export default NavBar
