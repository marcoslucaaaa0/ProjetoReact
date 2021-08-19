export class ModeloProduto {
    constructor(
        public imagem: any,
        public titulo: string,
        public id?: string,
        public maisImagens?: any[]
    ) {}
}