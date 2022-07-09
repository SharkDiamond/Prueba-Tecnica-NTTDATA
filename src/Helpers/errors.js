

const errorManage=(error,navegador=null) => {
    
    //IMPRIMIENDO EN CONSOLA EL ERROR
    console.log(error.message);
    //SI EL SERVIDOR SE VA DOWN
    if (error.message==='Network Error') alert('Server Down');
    //EN DADO CASO DE SER UN ERROR DE MIDLEWARES       
    if (error.response.data.Problems) return alert(error.response.data.Problems[0].msg);
    //EN DADO CASO DE SER UN ERROR DE VALIDACION 'TOKEN'
    else if (error.response.data.msg){
        
        //ELIMINANDO EL TOKEN DEL SSESION STORAGE
        sessionStorage.removeItem('token');
        //REDIRIGIENDO A LA RUTA DEL LOGIN
        navegador('/Login');


    } 

 }

 module.exports=errorManage;