import { ModeloCartao } from "./cartao";

export class ModeloSecao {
    constructor(
        public titulo: string,
        public cartoes: ModeloCartao[],
        public id?: string
    ) {}
}