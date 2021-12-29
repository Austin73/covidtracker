import React from 'react'
import { AppBar,Container,Toolbar,Typography } from '@mui/material'
import '../styles/Footer.css'
function Footer() {
    return (
        <AppBar position="static" color="primary" >
          <Container maxWidth="md" style={{display:'flex',minHeight:'minContent',flexDirection:'column'}}>
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 covid tracker
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer
