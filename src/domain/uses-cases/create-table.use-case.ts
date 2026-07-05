interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    const headerMessage: string = `===============================
          Tabla del ${base}
  ===============================\n`;
    let data: string = headerMessage;

    for (let i: number = 1; i <= limit; i++) {
      data += `\n${base} x ${i} = ${base * i}`;
    }

    return data;
  }
}
