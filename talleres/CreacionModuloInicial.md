# Creación modulo inicial

-  [Modulo Inicial](#modulo-inicial)
-  [book.ctrl.js](#bookctrljs)
-  [book.mod.js](#bookmodjs)
-  [book.svc.js](#booksvcjs)

## Modulo Inicial
Para la creación de un modulo se deben definir una serie de Javascript que cumplen unas funciones basicas:

Nombre  | Función
------- | -------------
book.ctrl.js  | Controlador del modulo
book.mod.js   | Definición del modulo
book.svc.js   | Servicios del modulo

Estos archivos deben ir en la ruta "src/modules/book" y a continuación se explica con mayor detalle el funcionamiento de cada uno.

## book.ctrl.js
Define el controlador del modulo, el cual se registra como "bookCtrl" y hace llamados a "bookService" para completar sus funciones. Principalmente se compone de los mismos metodos que tiene el servicio (puesto que debe llamarlos según sea el caso) con la adición de metodos que permiten mostrar mensajes de alerta e información acerca de las operaciones que debe realizar el controlador.

## book.mod.js
El modulo se define aquí, especificando su nombre: "bookModule", los modulos que requiere: "bootstrap" y la definición de la constante "bookContext" que esta definida como una URL.

## book.svc.js
En este archivo se define el servicio "bookService" en el cual se crean los siguientes metodos:

Nombre          | Función                                                                       | Tipo de petición
--------------- | ----------------------------------------------------------------------------- | -------------------
fetchRecords    | Retorna todos los libros                                                      | GET
fetchRecord     | Retorna el libro que se pasa como parametro                                   | GET
saveRecord      | Al tener el parametro "saveRecord" definido es porque se esta actualizando la información de un libro existente, por lo tanto se hace una consulta de actualización del registro                                     | PUT
saveRecord      | En caso de no tener definido el parametro "saveRecord" se procede a crear un nuevo book haciendo una petición de creación de registro                                                                            | POST
deleteRecord    | Hace una petición DELETE para borrar el libro que se pasa como parametro      | DELETE
