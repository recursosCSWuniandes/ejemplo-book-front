# Configuración ambiente de desarrollo

-  [Instalar NodeJS](#instalar-nodejs)
-  [Actualización NPM](#actualización-npm)
-  [Ejecución de tareas](#ejecución-de-tareas)
-  [Instalar dependencias](#instalar-dependencias)
-  [Configuración de NetBeans](#configuración-de-netbeans)

## Instalar NodeJS
NodeJS es un framework de desarrollo web basado en javascript que se ejecuta sobre la plataforma V8. Permite la instalación de herramientas para crear aplicaciones tanto de frontend como de backend basadas netamente en javascript.

Para poder ejecutar pruebas de proyectos javascript es necesario instalar el framework [NodeJS](https://nodejs.org/). Este framework permite, entre otras cosas, la ejecución de tareas de empaquetado, pruebas y despliegue para proyectos javavascript.

Para el presente ejemplo se requiere utilizar la versión v0.12.7, por lo cual se recomienda el uso de un manejador de versiones de node como NVM para poder instalar la versión que se desea.

Para instalar NVM tiene dos opciones:

* [NVM para Windows](https://github.com/coreybutler/nvm-windows)
* [NVM para Mac OSX](https://github.com/creationix/nvm)

En ambos casos debe usar los siguientes comandos para instalar y utilizar el Node deseado:

```sh
nvm install 0.12.7
```

```sh
nvm use 0.12.7
```

## Actualización NPM
NPM es el gestor de paquetes de NodeJS. Actualmente, NodeJS trae por defecto NPM 2, sin embargo, NPM 3 incluye varias mejoras, entre ellas un conflicto que evitaba a los clientes Windows eliminar los paquetes instalados. Por esta razón, se recomienda instalar NPM 3 a través del siguiente comando (debe tener permisos de administrador):

```
npm update -g npm
```

## Ejecución de tareas
Para la ejecución de tareas en NodeJS existen varias herramientas como Grunt, Gulp, Broccoli, entre otros. Para este ejemplo se usa Grunt, dado que es el más popular en este momento, por lo que tiene bastantes plugin para facilitar la configuración.

## Instalar dependencias
npm es el manejador de paquetes de NodeJS. Una vez instalado, es posible instalar paquetes de manera global en el equipo para que estén disponibles desde la consola. Para este proyecto usaremos sólo dos paquetes globales:

- bower: Se encarga de obtener las dependencias del proyecto javascript a nivel de frontend.
- grunt-cli: comandos de consola para la ejecución de grunt. Tener en cuenta que este es sólo el cliente y no representa una instalación de grunt.

```sh
npm install -g bower grunt-cli
```

Después de esto, es necesario instalar las dependencias del proyecto, que permitirán realizar las tareas de construcción y ejecución de pruebas del mismo. Para ello, en la consola, utilice el comando ```cd``` para ir al directorio del proyecto, luego ejecute el siguiente comando, el cual indica a NodeJS que debe buscar las dependencias del proyecto en `package.json` y realiza la instalación de las mismas.
```sh
npm install
```

Adicionalmente, se necesita instalar las dependencias de bower, las cuales se encuentran definidas en el archivo `bower.json`. Para esto se ejecuta el siguiente comando:

```sh
bower install
```

## Configuración de NetBeans

El desarrollo del proyecto se hará usando el IDE [NetBeans](https://netbeans.org/) en su versión 8.1, descargue del sitio web la versión Java EE e instalela en su maquina.

Una vez haya instalado el programa dirigase a los ajustes del mismo (Netbeans -> Preferences en Mac, Tools -> Options para Windows) y seleccione la pestaña **HTML/JS**. Ahora proceda a configurar la ubicación de Bower, Grunt y NodeJS/NPM.

Para **Bower** la ruta - en Mac - suele ser:

```
/Users/USUARIO/.nvm/versions/node/v0.12.7/bin/bower
```

Para Windows:

```
C:\Users\USUARIO\AppData\Roaming\nvm\v0.12.7\bower.cmd
```

Mientras que para **Grunt** se tiene, en Mac:

```
/usr/local/bin/grunt
```

En Windows:

```
C:\Users\USUARIO\AppData\Roaming\nvm\v0.12.7\grunt.cmd
```

En el caso de **Node**:

```
/usr/local/bin/node
```

En Windows:

```
C:\Program Files\nodejs\node.exe
```

Finalmente **NPM**:

```
/Users/USUARIO/.nvm/versions/node/v0.12.7/bin/npm
```

En Windows:

```
C:\Program Files\nodejs\npm.cmd
```

Tenga en cuenta que los directorios pueden variar entre un sistema y otro.
