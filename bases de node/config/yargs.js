import yargs from "yargs";
console.clear();

const argv = yargs(process.argv)
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
  })
  .option("h", {
    alias: "limite",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Es necesario que la base sea un numero";
    } else if (isNaN(argv.h)) {
      throw "Es necesario que el limite sea un numero";
    } else return true;
  }).argv;
console.log("datos:", argv);
export default argv;
