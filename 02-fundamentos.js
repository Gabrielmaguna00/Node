//OBJETOS DESESTRUCTURACION

const deadpool = {
  nombre: "wade",
  apellido: "wingston",
  poder: "regeneracion",
  getNombre() {
    return `${this.nombre} ${this.apellido}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido
// const poder = deadpool.poder

// const { nombre, apellido, poder, edad=100} = deadpool;
//edad asignada en caso de que su valor sea undefined

//desestructuracion mediante los argumento
function imprimeHeroe({ nombre, apellido, poder, edad = 100 }) {
  console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(deadpool);
// console.log(nombre, apellido, poder);

const saludos = ["hola", "chau", "buen dia"];
const [, , s3] = saludos;
console.log(s3);

//CALLBACKS
const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  if (salario) {
    callback(null, salario);
  } else {
    callback(`No existe salario para el id ${id}`);
  }
};
const id = 2;

// getEmpleado(id, (err, empleado) => {
//   if (err) {
//     console.log("ERROR!");
//     return console.log(err);
//   }

//   getSalario(id, (err, salario) => {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("El empleado:", empleado, "tiene un salario de:", salario);
//   });
// });

//PROMISES

const getEmpleado2 = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if (empleado) {
      resolve(empleado);
    } else {
      reject(`Empleado con id ${id} no existe`);
    }
  });
};
const getSalario2 = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`El salario del id ${id} no se encuentra disponible`);
  });
};
getSalario2(2)
  .then((salario) => console.log(salario))
  .catch((err) => console.log(err));
