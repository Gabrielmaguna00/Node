import { writeFile } from "node:fs";

export const crearArchivo = async (b, l, lim) => {
  try {
    let salida = "";
    for (let i = 1; i <=lim; i++) {
      salida += `${b} x ${i} = ${b * i}\n`;
    }
    let archivo = `tabla-${b}.txt`;
    writeFile(`./salida/${archivo}`, salida, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      if (l) {
        console.log(salida);
      }
      console.log(`${archivo} creado con exito`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
