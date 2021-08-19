export class ModeloUsuario {
    constructor(
        public id?:string,
        public nome?:string,
        public cpf?:string,
        public email?:string,
        public telefone?:string,
        public senha?:string,
        public foto?:string
    ) {}
}