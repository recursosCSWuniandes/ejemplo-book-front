# Creación estructura base

-  [Crear proyecto](#crear-proyecto)
-  [Modificando Gruntfile](#modificando-gruntfile)
-  [Modificando bower.json](#modificando-bowerjson)
-  [Modificando package.json](#modificando-packagejson)
-  [Ajustando el index.html](#ajustando-el-indexhtml)
-  [Crear app.js](#crear-appjs)
-  [Crear el primer template](#crear-el-primer-template)
-  [Ejecucion](#ejecución)

## Crear proyecto
Con NetBeans ya adecuadamente configurado proceda a crear un nuevo proyecto, para ello seleccione el tipo **HTML5/JS Application**.

En las opciones posteriores seleccione la ruta en donde guardara el proyecto, no seleccione ningun template y en las herramientas deje todas marcadas a excepción de gulpfile.js. Una vez creado el proyecto de clic derecho sobre el mismo y cree un nuevo folder llamado **app**, luego de clic derecho sobre el proyecto y seleccione la opción properties, ahora en **Sources** ubique la selección de la carpeta **Source Folder** y seleccione la carpeta que acabo de crear.

## Modificando Gruntfile

Abra el archivo *Important Files/Gruntfile* y asigne el contenido que se encuentra a continuación:

https://github.com/recursosCSWuniandes/ejemplo-book-front/blob/f94db9477718eb2b52c589f750613a592d30c7de/Gruntfile.js

Este archivo es utilizado por Grunt para realizar las tareas que en el ejecutamos (como build, run o test), por lo tanto su contenido puede resultar un poco complejo, se aconseja visitar la [documentación oficial](http://gruntjs.com/sample-gruntfile) para entender los conceptos basicos.

El Gruntfile inicia con la inclusión de algunas dependencias para la ejecución de las tareas que se explicaran más adelante, esta parte se determina con los dos *require*.

Posteriormente se definen algunas variables que son validas para el archivo en cuestión, en este caso se definiran dentro de la colección *appConfig*.

La configuración del proyecto inicia con la linea ```grunt.initConfig``` en donde se especifican algunas acciones (como clean, copy o ngtemplates). Tenga en cuenta que cada una de las anteriores se encarga de realizar tareas especificas según su funcionalidad y el plugin a donde correspondan. La documentación de cada una esta disponible en su respectivo sitio web, sin embargo la mayoria de opciones son muy dicientes sobre lo que tratan de cumplir.

Finalizando el archivo se encuentran las tareas que creamos, en este caso registramos:

Nombre  | Tareas que ejecuta
------- | -------------
run     | <ul><li>build</li><li>connect:dist:keepalive</li></ul>
debug   | <ul> <li>jshint (evalua la calidad de codigo JS)</li><li>jscs (da formato a codigo JS)</li><li>clean:server (borra directorios con archivos generados)</li><li>wiredep (concatena depedencias de bower)</li><li>includeSource (incluye archivos con los parametros especificados)</li><li>copy:styles (copia archivos)</li><li>connect:livereload</li><li>watch (monitorea archivos y corre tareas en base a cambios sobre los mismos)</li></ul>
build   | <ul><li>jshint</li><li>jscs</li><li>clean</li><li>wiredep:dist</li><li>includeSource</li><li>useminPrepare (prepara la minificación de archivos)</li><li>ngtemplates</li><li>concat</li><li>copy</li><li>cssmin (minifica codigo CSS)</li><li>uglify (minifica codigo JS)</li><li>filerev (renombra archivos para manejar el cache del navegador)</li><li>usemin (reescribe archivos basandose en cambios de filerev y useMinPrepare)</li><li>htmlmin (minfiica codigo HTML)</li></ul>
default | <ul><li>build</li></ul>

Como puede apreciar es posible dentro de una tarea registrada hacer un llamada a otra, como es el caso de default que ejecuta test (es decir todas las subtareas que allí se definen) y lo mismo para build.

## Modificando bower.json

Abra el archivo *Important Files/bower.json* y asigne el contenido del ejemplo:

https://github.com/recursosCSWuniandes/ejemplo-book-front/blob/f94db9477718eb2b52c589f750613a592d30c7de/bower.json

Bower es un gestor de paquetes que permite la carga de depencias dentro de proyectos web. En el archivo enlazado podrá preciar que se asignan los siguientes parametros:

* name: Nombre del paquete.
* dependencies: Aquí se especifican las 5 depedencias para el funcionamiento en producción, estas depedencias serán explicadas con mayor detalle más adelante.
* devDependencies: Son las dependencias que se requieren para el funcionamiento en la fase de desarrollo.
* overrides: En esta colección se especifican propiedades que sobreescribiran a las que vienen por defecto en determinados paquetes, como Bootstrap para este ejemplo.
* resolutions: Cuando bower encuentra que dos paquetes requieren de un mismo paquete para su ejecución, con distintas versiones cada uno, se entra en un conflicto por no saber que versión debe cargarse, por lo tanto es posible especificar que versión usar en caso de encontrar este tipo de conflictos para algún paquete en particular, lo que en este caso se realizo para csw-ng-auth.

## Modificando package.json
Abra el archivo *Important Files/package.json* y asigne el contenido del ejemplo:

https://github.com/recursosCSWuniandes/ejemplo-book-front/blob/f94db9477718eb2b52c589f750613a592d30c7de/package.json

En este archivo las primeras 4 lineas son de configuración: name, version, description y main (archivo principal de carga).

La colección *devDependencies* se encarga de listar todas las depedencias que requiere el proyecto en su fase de desarrollo. Como podrá apreciar, se hace uso de grunt para el funcionamiento del mismo, así como de algunos plugins del mismo que incluyen funciones como la minimización de codigo.

Posteriormente se encuentra *engines* en donde se especifican los motores de node y npm con la versión que se utilizara (^0.12.7 y 3.0.0 respectivamente, ^ se usa para permitir el uso de una versión mas actualizada del tercer digito).

Los *scripts* son los comandos que se encargaran de llevar a cabo las pruebas y la instalación del proyecto. Mientras que *repository*, *bugs* y *homepage* son enlaces a los contenidos del proyecto, tenga en cuenta que deberá ajustar las urls del repositorio para que sean acorde a los que usted este utilizando. 

## Ajustando el index.html
Para la aplicación que esta creando se usaran dos frameworks web:

* [AngularJS](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com)

**AngularJS** es un framework que facilita muchas de las tareas dinamicas que se desarrollan con Javascript, mientras que **Bootstrap** es un framework que permite la creación rapida de sitios web responsive mediante el uso de unos HTML/CSS/JS predeterminados.

Como guia para la modificación del *index.html* usaremos el siguiente archivo:

https://github.com/recursosCSWuniandes/ejemplo-book-front/blob/f94db9477718eb2b52c589f750613a592d30c7de/app/index.html

Para implementar **AngularJS** y **Bootstrap** en el proyecto creado mueva el index.html para que quede adentro de la carpeta *app*, abralo y modifique la etiqueta ```<html>``` y dejela como ```<html ng-app="mainApp">``` para cargar Angular sobre el template.

Posteriormente agregue el siguiente pedazo de codigo al ```<head>``` el cual se encarga de asignarle un titulo a la aplicación, ajustar el tamaño para que sea responsive, arreglar la compatibilidad con Internet Explorer y definir UTF-8 como charset:

```HTML
<title>BookBasico</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Proceda a cargar los archivos CSS del proyecto, estos archivos serán cargados por Bower por lo cual unicamente hay que dejar una etiqueta para que Bower los agregue automaticamente al hacer build, de la siguiente manera:

```HTML
<!-- build:css(<%= meta.src %>) styles/vendor.css -->
<!-- bower:css -->
<!-- endbower -->
<!-- endbuild -->

<!-- build:css(<%= meta.src %>) styles/main.css -->
<!-- include: "type": "css", "files": "<%= meta.includeCssFiles %>" -->
<!-- /include -->
<!-- endbuild -->
```

Finalmente, agregue los archivos javascript del mismo modo:

```HTML
<!-- build:js(<%= meta.src %>) scripts/vendor.js -->
<!-- bower:js -->
<!-- endbower -->
<!-- endbuild -->

<!-- build:js(<%= meta.src %>) scripts/scripts.js -->
<!-- include: "type": "js", "files": "<%= meta.includeJsFiles %>" -->
<script src="src/app.js"></script>
<!-- /include -->
<!-- endbuild -->
```

Con lo anterior Bower hará la carga de Angular, los scripts Bootstrap (incluyendo jQuery) y los componentes adicionales de Bower, también se hará la carga de los archivos propios del proyecto, por ahora unicamente será el archivo ```src/app.js```

Para terminar debe cambiar el tag ```<body>``` al siguiente:

```HTML
<body style="padding-top: 60px;">
        <div class="container-fluid">
            <div class="col-md-12">
                <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-bar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href>BookBasico</a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="main-bar">
                            <ul class="nav navbar-nav">
                                <li><a ui-sref="book">Book</a></li>
                                <li><a ui-sref="editorial">Editorial</a></li>
                                <li><a ui-sref="author">Author</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                <login-button></login-button>
                                </li>
                            </ul>
                        </div> <!-- /.navbar-collapse -->
                    </div> <!-- /.container-fluid -->
                </nav>
            </div>
            <div ui-view></div>
        </div>
    </body>
```

Esta porción de codigo se encarga de definir la estructura HTML basica de Bootstrap. Se incluye incluye el encabezado, maqueteado con ```<navbar>```, que actua de modo responsive. También esta presente el menu del aplicativo (```<ul class="nav navbar-nav">```), así como las opciones de loggeo que se manejan con el tag ```<login-button>```.  

## Crear App.js
Para empezar cree una carpeta en el folder *app* y asignele el nombre *src*, posteriormente agregue allí un archivo *app.js* con el siguiente contenido:

https://github.com/recursosCSWuniandes/ejemplo-book-front/blob/f94db9477718eb2b52c589f750613a592d30c7de/app/src/app.js

En este archivo se registran los modulos iniciales, para este caso unicamente será *ui.router*. A continuación, usando el $stateProvider de Angular, se da reconocimiento a los path iniciales: /book, /editorial y /author para que carguen los modulos que se van a definir.

## Crear el primer template
Luego de ello hay que crear un directorio adicional dentro de *src* llamado *modules* en donde se almacenaran los modulos, adentro de dicho folder también deben crearse los directorios *book*, *editorial* y *author*. En cada directorio se crean los archivos ```book.tpl.html, editorial.tpl.html y author.tpl.html``` respectivamente. Estos archivos .tpl.html son los templates que estructuran la página que se despliega en el navegador, los que se han dado de guia funcionan con los framework de AngularJS y Bootstrap, por lo que la documentación de ambas plataformas resulta ser de gran utilidad para entender con claridad las lineas de los mismos. Los archivos guia se encuentran a continuación:

https://github.com/recursosCSWuniandes/ejemplo-book-front/tree/f94db9477718eb2b52c589f750613a592d30c7de/app/src/modules

El archivo inicial cuenta con contenido estatico, es decir que unicamente se encarga de mostrar información predeterminada cuando se hace la carga del mismo (con 3 libros, autores y editoriales), sin embargo este archivo se modificará con la intención de hacer el despliegue de los datos que se carguen del backend.

Tenga en cuenta la documentación de bootstrap para comprender el contenido del archivo, en especifico se hace uso de una serie de ```<div>``` anidados en donde ```col-(md/sm)-#``` representan una columna (# va de 1 a 12) y estas columnas tienen la información de los 3 libros mencionados.

## Ejecución
Para ver el proyecto desplegado (con la información de los libros estaticos), proceda a dar clic derecho sobre el proyecto y seleccione las siguientes opciones:

```npm install```

```bower install```

```Grunt Tasks -> Advanced... -> grunt run```

Posteriormente se deberá ver la aplicación funcionando sobre la siguiente url:

[http://localhost:9000](http://localhost:9000)
