import mongoose from "mongoose";

const conectarBD = async():Promise<void>=>{
    try {
        await mongoose.connect("mongodb+srv://ez:18155786@emiliano.wjn22ao.mongodb.net/")
        console.log("conectado a Base de Datos");
        
    } catch (error) {
        console.log(" error de conexión");
        
        
    }
}

export{
    conectarBD
}