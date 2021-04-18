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

 --- [GET] http://localhost:3000/image_tags --- 

### Response 

{
    "images": [
        {
            "url": "https://cdn2.thecatapi.com/images/MTU5NjA4OA.jpg",

            "m80px": "{\"type\":\"Buffer\",\"data\":[71,73,70,56,57,97,159,0,80,0,135,0,0,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,30,30,30,31,31,31,32,32,32,33,33,33,34,34,34,35,35,35,37,37,37,38,38,38,40,40,40,41,41,41,42,42,42,44,44,44,45,45,45,46,46,46,47,47,47,48,48,48,49,49,49,50,50,50,51,51,51,53,53,53,67,67,67,68,68,68,70,70,70,72,72,72,73,73,59, ....]}", //json stringify
            
            "r30d": "{\"type\":\"Buffer\",\"data\":[71,73,70,56,57,97,50,2,214,1,132,0,0,12,12,12,16,16,16,21,21,21,25,25,25,29,29,29,35,35,35,44,44,44,51,51,51,59,59,59,67,67,67,75,75,75,82,82,82,91,91,91,99,99,99,107,107,107,115,115,115,124,124,124,131,131,131,139,1393,235,242,2,9,48,5,36,249,149,204,233,86,13,48,140,76,88,116,117,176,77,246,133,74,116,225,153,7,52,95,1,177,121,255,206,163,154,172,25,158,196,5,108,172,151,126,204,21,155,29,50,0,106,182,63,92,217,70,94,196,76,68,249,82,50,209,10,129,200,35,107,5,153,38,12,...]}",
            
            "b64": "data:image/gif;data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIASgB9AMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APoi80qbibyduAcDrjP489f1r/"
        },
        {...}
    ]
}

### image_gif 

Ejemplo : 

 --- [GET] http://localhost:3000/image_gif
 
 ### response 
 
 se muestra una imagen en el navegador. (no se implemento gif)
 
 responde solo una imagen(no se concluyó este punto
 
 
