import { CreateTable } from "../domain/uses-cases/create-table.use-case.ts";
import { SaveFile } from "../domain/uses-cases/save-file.use-case.ts";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("Server running...");

    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    if (showTable) console.log(table);
    wasCreated
      ? console.log("File created!")
      : console.log("File not created!");
  }
}
