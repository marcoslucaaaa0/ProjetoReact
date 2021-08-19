export class ModeloCarrinho {
    constructor(
        public imagem: any,
        public titulo: string, 
        public resumo: string,
        public preco: number,
        public quantidade: number,
        public id?: string 
    ) {}
}