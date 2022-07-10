

//FUNCION PARA MANEJAR TODO CON RESPECTO A LOS ERRORES
const errorManage=(error,navegador=null) => {
    
    //IMPRIMIENDO EN CONSOLA EL ERROR
    console.log(error.message);
    //SI EL SERVIDOR SE VA DOWN
    if (error.message==='Network Error') alert('Server Down');
    //EN DADO CASO DE SER UN ERROR DE MIDLEWARES       
    if (error.response.data.Problems) return alert(error.response.data.Problems[0].msg);
    //EN DADO CASO DE SER UN ERROR DE VALIDACION 'TOKEN'
    if (error.response.data.msg===`token no valido`){
        //ELIMINANDO EL TOKEN DEL SSESION STORAGE
        sessionStorage.removeItem('token');
        //REDIRIGIENDO A LA RUTA DEL LOGIN
        return  navegador('/Login');
    }
    else alert(error.response.data.msg);

 }

 module.exports=errorManage;