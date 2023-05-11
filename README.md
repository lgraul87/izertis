# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.

# Notas del desarrollador:

1  - Se actualiza la version del proyecto, a angular 15, eliminando los fallos de seguridad.
2  - Se actualiza la estructura del proyecto, la carga de sus componentes y la navegación entre sus paginas.
3  - Se integra el proyecto con Firebase Hosting "https://izertis-5c5c5.web.app/".
4  - Se define la configuracion de despliegue automatico para la integracion continua del proyecto.
5  - Se integra la base de datos de Firestore para el proyecto, y se despliega.
6  - Se define la logica y control de errores para la pantalla de login.
7  - Se define la logica y control de errores para la pantalla de register.
8  - Se define la pantalla principal.
9  - Se define Redux en la comunicacion con la pantalla principal, a traves de evento de boton.
10 - Se definen interfaces (films, ships, vehicles, planets ...).
11 - Se añaden imagenes para las cards de ships
12 - Se definen las funcionalidades de errores para login, register, imagenes etc...
13 - Se definen un test para un formulario de login
