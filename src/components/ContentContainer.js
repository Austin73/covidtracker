import React from 'react'
import { useSelector } from 'react-redux'
import Prevention from './Prevention'
import Symptoms from './Symptoms'
import Home from './Home'
import Contact from './Contact'
import About from './About'
function ContentContainer() {
    const navButton = useSelector(state => state.navButton)
   
    return (
        <div style={{
            width:'100%',
            height:'3rem',
            backgroundColor: 'salmon',
            textAlign:'center'
        }}>
         
            {navButton===3 ? <Symptoms/> : "" }
            {navButton===4 ? <Prevention/>: ""}
            {navButton===1 ? <Home/>: ""}
            {navButton===2 ? <About/>: ""}
            {navButton===5 ? <Contact/>:""}
        </div>
    )
}

export default ContentContainer
