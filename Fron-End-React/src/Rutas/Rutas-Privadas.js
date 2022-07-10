//IMPORTACIONES
import { Navigate } from 'react-router-dom';
import React from 'react';

export default function RutasPrivadas({children}) {
    
    //Getting the token
    const token = sessionStorage.getItem("token");
    //checking if the token exist
    return token ? children : <Navigate to={"/Login"} />;

}