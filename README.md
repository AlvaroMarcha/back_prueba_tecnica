# back_prueba_tecnica

Base URL
http://localhost:3000

GET
-----------------------------------------------------------------
RUTAS DISPONIBLES
Para conseguir todos los usuarios: 
URL: http://localhost:3000/users
METODO: GET

GET
-----------------------------------------------------------------
Para conseguir un usuario mediante el nombre:
URL: http://localhost:3000/users/:id
METODO: GET
PARAMETROS ESPERADOS: id

POST
-----------------------------------------------------------------
Para agregar un nuevo usuario a la colecion:
URL: http://localhost:3000/users/add
METODO: POST
VALORES ESPERADOS (JSON):
{
  "name": "nombre",
  "email": "nombre@nombre.com",
  "phone": "11111111",
  "password": "unacontraseña"
}

DELETE
-----------------------------------------------------------------
Para eliminar un usuario existente:
URL: http://localhost:3000/users/delete/:id
METODO: DELETE
PARAMETROS ESPERADOS: id

PUT
-----------------------------------------------------------------
Para actualizar un usuario existente:
URL: http://localhost:3000/users/update/:id
METODO: PUT
PARAMETROS ESPERADOS: id
VALORES ESPERADOS (JSON):
{
  "name": "nombre",
  "email": "nombre@nombre.com",
  "phone": "11111111",
  "password": "unacontraseña"
}

