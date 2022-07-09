const {Schema,model}=require("mongoose");

const UsuarioSchema=Schema({

    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    apellido:{
        type:String,
        required:[true,"El apellido es obligatorio"]
    },

    correo:{

        type:String,
        required:[true,"El correo es obligatorio"],
        unique:true
    },
    direccionfisica:{
        type:String,
        required:[true,"La direccion fisica es necesaria"]
    
    
      },
    rol:{
        type:String,
        require:true
    },

    fechaCreacion:{
        type:String,
        default: new Date().toDateString()

    },
    estado:{

        type:Boolean,
        default:true

    }

});

UsuarioSchema.methods.toJSON = function() {
    //EXTRAYENDO LA VERSION Y EL PASSWORD 
    const {__v,password, _id,...usuario}=this.toObject();
    //RETORNANDO TODO LO DEMAS
    usuario.uid=_id;

    return usuario;
}
module.exports=model('Usuario',UsuarioSchema);