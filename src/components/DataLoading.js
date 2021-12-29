import React from 'react'
import spinner from '../assests/Spinner.gif'

function DataLoading() {
    return (
        <div style={{
            textAlign:"center",
            
        }}>
           <img src={spinner} width="30%" alt='Data Loading'/>
        </div>
    )
}

export default DataLoading
