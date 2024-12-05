const paseoPerro = false;
const aspirarCasa = false;
const sacarBasura = false;

const pasearPerro = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paseoPerro) {
        resolve("Paseo completado 🐶");
      } else {
        reject("No paseaste al perro");
      }
    }, 2000);
  });
};

console.log("Iniciando tareas");

pasearPerro()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Tareas acabadas");
