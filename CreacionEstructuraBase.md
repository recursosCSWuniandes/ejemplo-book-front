# Creación estructura base

-  [Crear proyecto](#crear-proyecto)
-  [Modificando Gruntfile](#modificando-gruntfile)
-  [Modificando bower.json](#modificando-bower.json)
-  [Modificando package.json](#modificando-package.json)
-  [Ajustando el index.html](#ajustando-el-index.html)
-  [Instalar dependencias](#instalar-dependencias)
- 

## Crear proyecto
Con NetBeans ya adecuadamente configurado proceda a crear un nuevo proyecto, para ello seleccione el tipo **HTML5/JS Application**.

En las opciones posteriores seleccione la ruta en donde guardara el proyecto, no seleccione ningun template y en las herramientas deje todas marcadas a excepción de gulpfile.js

## Modificando Gruntfile

## Modificando bower.json

Abra el archivo *Important Files/bower.json* y asigne el contenido del ejemplo:

!!ENLACE DEL ARCHIVO

Bower es un gestor de paquetes que permite la carga de depencias dentro de proyectos web. En el archivo enlazado podrá preciar que se asignan los siguientes parametros:

* name: Nombre del paquete.
* dependencies: Aquí se especifican las 5 depedencias para el funcionamiento en producción, estas depedencias serán explicadas con mayor detalle más adelante.
* devDependencies: Son las dependencias que se requieren para el funcionamiento en la fase de desarrollo.
* overrides: En esta colección se especifican propiedades que sobreescribiran a las que vienen por defecto en determinados paquetes, como Bootstrap para este ejemplo.
* resolutions: Cuando bower encuentra que dos paquetes requieren de un mismo paquete para su ejecución, con distintas versiones cada uno, se entra en un conflicto por no saber que versión debe cargarse, por lo tanto es posible especificar que versión usar en caso de encontrar este tipo de conflictos para algún paquete en particular, lo que en este caso se realizo para csw-ng-auth.

## Modificando package.json
Abra el archivo *Important Files/package.json* y asigne el contenido del ejemplo:

!!ENLACE DEL ARCHIVO

En este archivo las primeras 4 lineas son de configuración: name, version, description y main (archivo principal de carga).

La colección *devDependencies* se encarga de listar todas las depedencias que requiere el proyecto en su fase de desarrollo. Como podrá apreciar, se hace uso de grunt para el funcionamiento del mismo, así como de algunos plugins del mismo que incluyen funciones como la minimización de codigo.

Posteriormente se encuentra *engines* en donde se especifican los motores de node y npm con la versión que se utilizara (^0.12.7 y 3.0.0 respectivamente, ^ se usa para permitir el uso de una versión mas actualizada del tercer digito).

Los *scripts* son los comandos que se encargaran de llevar a cabo las pruebas y la instalación del proyecto. Mientras que *repository*, *bugs* y *homepage* son enlaces a los contenidos del proyecto, tenga en cuenta que deberá ajustar las urls del repositorio para que sean acorde a los que usted este utilizando. 

## Ajustando el index.html
Para la aplicación que esta creando se usaran dos frameworks web:

* [AngularJS](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com)

**AngularJS** es un framework que facilita muchas de las tareas dinamicas que se desarrollan con Javascript, mientras que **Bootstrap** es un framework que permite la creación rapida de sitios web responsive mediante el uso de unos HTML/CSS/JS predeterminados.

Para implementar **AngularJS** en el proyecto creado abra el index.html que se encuentra adentro de la carpeta *Site Root*, en primer lugar modifique la etiqueta ```<html>``` y dejela como ```<html ng-app="mainApp">``` con ello 
