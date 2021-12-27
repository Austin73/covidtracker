import React from 'react'
import { MotionPhotosAuto } from '@mui/icons-material'

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  }
function DataLoading() {
    return (
        <div>
            <MotionPhotosAuto/>
        </div>
    )
}

export default DataLoading
