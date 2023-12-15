/**
 * > File System
 * 
 * > Antes de manejar archivos txt o json tenemos que entender,
 * que todo lo que vamos a guardar deberá ser de tipo string,
 * por eso necesitamos apoyarnos en los métodos:
 * 
 * > JSON.stringify() para convertir de objeto de a json
 * 
 * JSON.stringify(datajs,filtro,orden)
 * 
 * > JSON. parse() para convertir de json a objetos
 * 
 * JSON.parse(datajs)
 * 
 * > El manejador de archivos fs podemos llamarlo desde cualquier archivo 
 * que tengamos de nuestro código con la siguiente línea: 
 * 
 * const fs = require('fs')
 * 
 * > Implementación sincrónica
 *      * writeFileSync para escribir contenido en un archivo. 
 *      * readFileSync para leer el contenido de un archivo.
 *      * unlinkSync para eliminar el archivo.
 *      * existsSync para corroborar que un archivo existe
 * 
 */

const fs = require('fs')

const ruta =  "archivo/archivo.json"

const contenido = JSON.stringify([
    {title:"Ponyo" ,place:"Cinemacenter"},
    {title:"Kiki delivery services" ,place:"Guido Miranda"},
    {title:"Mi vecino Totoro",place:"Paseo de la costa"}
],null,2)

fs.writeFileSync(ruta,contenido)

const config = "utf-8"

const leido = fs.readFileSync(ruta,config)

//console.log(leido);

