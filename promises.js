/**
 * ################# FILE SYSTEM CON PROMESAS
 * 
 *  Al colocar el fs.promises indicamos que la operación se estará realizando de manera asincrona
 *  Por lo tanto en lugar de ejecutarla con callbacks lo realizaremos con .then & .catch o async/await
 * 
 *  > Las principales operaciones son:
 *      > fs.promises.writeFile para escribir contenido en un archivo
 *      > fs.promises.readFile para leer el contenido de un archivo 
 *      > fs.promises.unlink para eliminar el archivo.
 * 
 */

const fs = require('fs');

const ruta = "archivo/asincrono.json"

const contenido = JSON.stringify([
    {title:"El tiempo entre nosotros" , place:"Parque de la democracia"},
    {title:"La Puta, el castillo en el cielo", place:"Shopping Sarmiento"}],null,2)

fs.promises.writeFile(ruta,contenido)
    .then(res => console.log("exito"))
    .catch(error => console.log("ocurrio un error"))

/*
fs.promises.unlink(ruta)
    .then(res => console.log("exito"))
    .catch(error => console.log("ocurrio un error"))
   */ 