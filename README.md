## Angular App front end - springBoot

- Se menaje por componente secundarios de métodos y componente principales de rutas
------------------------------------------------------------------------------------------------
package de vs code

    * Angular Language Service
    * Angular Snippets (Version 18)

------------------------------------------------------------------------------------------------
Crear proyecto

- este comando es de unica vez para usuarios de windows
    - Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
- este comanod es de unica vez es para instalr Angular por primera vez
    - npm install -g @angular/cli@17
    - revisar la Version
        - ng version
- comando para genera aplicacion de angular
    - ng new "nombre de proyecto"
        - selecionamos en la ejecucion
            - css
            - consultara si deseamos correo por el lado del servidor del cliente o del servidor (si se desea correo en el lado del servidor de cliente se coloca que NO)
- para correr el servidor se ejecuta el comando
    - ng serve

------------------------------------------------------------------------------------------------
Explicación

- .html : es donde está el contenido
- .ts : para crear funciones y manejo de procesos
- en ProductComponent.ts se indica la asociación entre componente y servicio
- en ProductService.ts se asocia los datos de la base de datos
- el Observable observa los datos a cada segundo para peticiones
- en component product.component.html donde definimos el contenido de la pagina
- ProductComponent (padre) // FormComponent (hijo) // product.component.html (vista)
- en product.service.ts es donde se realiza la configuración del model y la asociación con le backEnd de springBoot
- en appConfig.ts se cargan los componentes necesarios de rutas para la asociación con el backEnd
- en product.service.ts se crear las funciones de crud  incluido en springBoot

------------------------------------------------------------------------------------------------
Archivos

- para crear carpeta con los componentes de angular se ejecuta por la terminal, se define el nombre de inicio y termino, ejemplo (products)
    - ng generate component products/components/product
- para crear carpeta de service es igual que a componente como el siguiente ejemplo
    - ng generate service products/services/product
- se crear la carpeta models en products
- se crear el archivo product.ts en models
- para crear carpeta de form es igual que a componente como el siguiente ejemplo
    - ng generate components products/components/form
