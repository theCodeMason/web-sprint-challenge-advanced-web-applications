import React from 'react'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    return(
        localStorage.getItem("token") ? 
            children 
            : 
            <Navigate to='/'/>
    )
}

export default PrivateRoute;
