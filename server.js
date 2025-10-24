// Importar el módulo de Express
import express from "express";
// Crear una instancia de la aplicación Express
const app = express();
// Middleware para poder procesar datos en formato JSON
app.use(express.json());
// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
res.send("🚀 Hola, Soy Francisco Garrido,buenas que tal");
});
// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});

//Si ponemos http://localhost:3000/productos nos llevara a productos y se puede crear otras parecidas pero cambiado productos por clientes por ejemplo
app.post("/productos",(req,res)=>{
    res.send("Listado de productos, llamda de post");
});
//El de clientes
app.get("/clientes",(req,res)=>{
    res.send("Listado de clientes");
});
/*
//El clientes pero con id
app.get("/clientes/:id",(req,res)=>{ //Si en vez de poner id ubiera puesto manolito abajo debe poner manolito per id es un primary key
    //Params
    const id=req.params.id;
    res.send("Listado de clientes:" + id); 
    //Si pongo http://localhost:3000/clientes/1 muestra Listado de clientes:1 pero sin en vez de poenr numero peudo 63452 saldria esto o si pongo letras sale letras
});
*/

//Aqui si pongo http://localhost:3000/clientes/1 no hira porque añadi el id_fk entocnes se pondria asi: http://localhost:3000/clientes/1/2
app.get("/clientes/:id/:id_fk",(req,res)=>{ 
    //Params
    const id=req.params.id;
    const id_fk=req.params.id_fk;
    res.send("Listado de clientes:" + id +" "+ id_fk); 

});