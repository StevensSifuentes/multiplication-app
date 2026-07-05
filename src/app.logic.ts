import fs from "fs";

import { yarg } from "./config/plugins/yargs.plugin.ts";

const { b: base, l: limit, s: showTable } = yarg;

const headerMessage: string = `===============================
        Tabla del ${base}
===============================\n`;

let data: string = headerMessage;

const outputPath: string = "outputs";
const pathFile: string = `${outputPath}/tabla-${base}.txt`;

for (let i: number = 1; i <= limit; i++) {
  data += `\n${base} x ${i} = ${base * i}`;
}

if (showTable) console.log(data);

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(pathFile, data);

console.log("\nFile created!");
