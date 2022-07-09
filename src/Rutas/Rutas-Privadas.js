import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RutasPrivadas({children}) {
    
    //Getting the token
    const token = sessionStorage.getItem("token");
    //checking if the token exist
    return token ? children : <Navigate to={"/Login"} />;

}