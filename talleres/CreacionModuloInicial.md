# Creación modulo inicial

-  [Modulo Inicial](#modulo-inicial)
-  [book.ctrl.js](#bookctrljs)
-  [book.mod.js](#bookmodjs)
-  [book.svc.js](#booksvcjs)
-  [book.tpl.html](#booktplhtml)

## Modulo Inicial
Para la creación de un modulo se deben definir una serie de archivos que cumplen unas funciones basicas:

Nombre  | Función
------- | -------------
book.ctrl.js    | Controlador del modulo
book.mod.js     | Definición del modulo
book.svc.js     | Servicios del modulo
book.tpl.html   | Template del modulo

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

## book.tpl.html
Ahora se procedera a modificar el archivo con el fin de adaptarlo al funcionamiento de AngularJS y los datos reales que maneja la aplicación por medio de su backend.

En el caso de book.tpl.html se empieza con el siguiente div: ```<div id="book-header">``` el cual muestra el menu del apartado de libros, por lo tanto allí se muestran los botones que permiten crear un libro, refrescar los libros mostrados, guardar los cambios realizados y cancelar la operación actual, estos botones son mostrados u ocultados según la operación que se este realizando (haciendo uso de ng-show y ng-hide de Angular).

A continuación se hace uso del tag ```<alert>``` mediante el cual se despliegan mensajes de información relevante para el usuario, como la recepción exitosa del formulario que deseaba enviar.

Posteriormente viene un tag ```<div ng-hide="ctrl.editMode">``` el cual muestra los libros como tal, junto con toda su información, seguido de un tag ```<div ng-show="ctrl.editMode" class="well">``` el cual es el formulario usado para la creación o edición de libros.
