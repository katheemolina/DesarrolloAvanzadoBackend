/*
Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar el módulo nativo crypto.
El manager debe contar con los siguientes métodos:
- El método “Crear usuario” debe recibir un objeto con los campos:
    Nombre
    Apellido
    Nombre de usuario
    Contraseña
- El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la contraseña debe estar hasheada por seguridad
- El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
- El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
*/

const crypto = require("crypto");

class UsersManager {
  //Atributo estatico para almacenar usuarios
  static Usuarios = [];

  //Metodo para crear un nuevo usuario
  static CrearUsuario(usuario) {
    //Hash de la contraseña con el modulo "crypto", el sha256 es una de las alternativas o formatos que se utilizan para encriptar, el update es para transformar lo que recibe y el .digest es siguiendo un sistema "hexadecimal" y veremos un pass alfanumerico
    const hashedPassword = crypto.createHash("sha256").update(usuario.Contraseña).digest("hex");

    const newUser = {
      Nombre: usuario.Nombre,
      Apellido: usuario.Apellido,
      NombreUsuario: usuario.NombreUsuario,
      Contraseña: hashedPassword, // Guardar la contraseña hasheada
    };

    //Agregar el usuario al arreglo
    this.Usuarios.push(newUser);
  }

  // Metodo para mostrar los usuarios
  static MostrarUsuarios() {
    console.log("usuarios registrados");
    this.Usuarios.forEach((usuario) => {
      console.log(`Nombre: ${usuario.Nombre}, Apellido: ${usuario.Apellido}, NombreUsuario: ${usuario.NombreUsuario}, contraseña: ${usuario.Contraseña}`);
    });
  }

  //Metodo para validar usuario y contraseña
  static ValidarUsuario(nombreUsuario, contraseña) {
    // Buscar el usuario dentro del arreglo
    const usuario = this.Usuarios.find((u) => u.NombreUsuario === nombreUsuario);

    if (!usuario) {
      console.log("Usuario no encontrado");
      return;
    }

    //Hashear la contraseña del parametro y compararla con la almacenada
    const hashedPassword = crypto.createHash("sha256").update(contraseña).digest("hex");

    //Comparar las contraseñas y arrojar error
    if (usuario.Contraseña === hashedPassword) {
      console.log("Logueado");
    } else {
      console.log("Contraseña erronea");
    }
  }
}

// Ejemplo de uso

//Crear usuario de ejemplo
UsersManager.CrearUsuario({
  Nombre: "Katherine",
  Apellido: "Molina",
  NombreUsuario: "kattmolina",
  Contraseña: "password123",
});

UsersManager.CrearUsuario({
  Nombre: "Luz",
  Apellido: "Tegaldi",
  NombreUsuario: "Ltegaldi",
  Contraseña: "abc123",
});

// Mostrar usuarios registrados
UsersManager.MostrarUsuarios();

//Validar un usuario - CORRECTO
// UsersManager.ValidarUsuario("kattmolina", "password123");

//Validar un usuario - INCORRECTO
UsersManager.ValidarUsuario("kattmolina", "password");
