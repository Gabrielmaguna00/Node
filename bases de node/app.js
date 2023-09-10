import { crearArchivo } from "./helpers/tabla.js";
import argv from "./config/yargs.js";
crearArchivo(argv.b, argv.l, argv.h);
