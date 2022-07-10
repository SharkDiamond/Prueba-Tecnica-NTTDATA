//IMPORTACIONES
import  { useNavigate,useParams } from "react-router-dom";
import { createContext, useState } from "react";
import errorManage from "../Helpers/errors";
import axios from "axios";

//CREANDO EL CONTEXTO Y EXPORTANDOLO
export const BuscarUsuario = createContext();

const UserSearch = ({ children }) => {
  
   //ESTADOS
      //ESTADO PARA MANEJAR EL DATO DEL SEARCH
      const [searchUser,setSearchUser]=useState('');
      //ESTADO PARA LA LISTA DE USUARIOS ENCONTRADOS
      const [listUserSearch,setListUserSearch]=useState([]);
     //NAVEGADOR PARA REDIRIGIR AL LOGIN
     const navegador=useNavigate();
     //OBTENIENDO LOS PARAMETROS DE LA URL
     const {tipoGrafica} = useParams();
    //FUNCION PAR BUSCAR UN USUARIO DETERMINADO
    const handleSearchUser = async(e) => {

    try {

      e.preventDefault();
      //PIDIENDO LOS DATOS DEL USUARIO
      const searchUserDatabase= await axios.get(`http://localhost:3006/Users/usersSearch/${searchUser}`,{

          headers:{

            'access-token':sessionStorage.getItem('token')

          }

      });

      //ACTUALIZANDO LA LISTA DE USUARIOS
      setListUserSearch(searchUserDatabase.data);
      //NAVEGANDO HACIA EL COMPONENTE
      navegador(`/Dashboard/${tipoGrafica}/usersTableListSearch`);

    } catch (error) {
       
      errorManage(error,navegador);
    }

   }

  //OBJETO QUE SE VA A PASAR GLOBAL
  const contextValue = {
    
    handleSearchUser,
    setSearchUser,
    searchUser,
    listUserSearch,
    setListUserSearch
  
  };

  return (
    <BuscarUsuario.Provider value={contextValue}>{children}</BuscarUsuario.Provider>
  );
};

export default UserSearch;