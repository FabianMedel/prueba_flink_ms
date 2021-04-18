# prueba_flink_ms
## Microservicio 1

### Este microservicio contiene las siguientes caracteristicas:
* Consume 10 imágenes de gatos + perros aleatorias cada vez (https://api.thecatapi.com/v1/images/search https://api.thedogapi.com/v1/images/search)
* Crea una miniatura de 80 px de ancho
* crea un set de la misma imagen, rotada cada 30°
* convierte a base64 el set
* responda en un arreglo las imagenes con sus respectivas etiquetas

Cuenta con 2 enpoints: image_tags e image_gif 
las librerias utilizadas son:
  * JIMP - manejo de imagenes
  * Request - envio de solicitud http

## Endpoints
### image_tags

Ejemplo: 

 --- [GET] http://localhost:3000/image_tags 

### Response 

### image_gif 

Ejemplo : 

 --- [GET] http://localhost:3000/image_gif
 
 ### response 
 
 responde solo una imagen(no se concluyó este punto
 
 
