/**
 * ################## FILE SYSTEM CON CALLBACKS ##################
 * 
 * > Las principales operaciones que podemos hacer con fs con callbacks son:
 *      > writeFile para escribir contenido en un archivo. Al sólo escribir, su callback es: (error)=>
 *      > readFile para leer el contenido de un archivo. Como pide información, su cb es de la forma: (error, resultado)=>
 *      > unlink para eliminar el archivo. Al no retornar nada, su cb es de la forma (error)=> 
 * 
 */

// Ejemplo de Writefile con call backs

const fs = require('fs');

const config = "utf-8"

const ruta =  "archivo/archivo.json"

const contenido = JSON.stringify([
    {title:"Ponyo" ,place:"Cinemacenter"},
    {title:"Kiki delivery services" ,place:"Guido Miranda"},
    {title:"Mi vecino Totoro",place:"Paseo de la costa"}
],null,2)

fs.writeFile(ruta,contenido,(error) => {
    if (error){
        console.log("Ocurrio un error");
    }
})

// Ejemplo de readFile con call backs

fs.readFile(ruta,config,(error,results)=>{
    if (error){
        return error;
    }
    console.log(results);
    return results
})

// Ejemplo de unlink 

fs.unlink(ruta,(error)=>{
    if (error){
        console.log("Ocurrio un problema");
    }
})