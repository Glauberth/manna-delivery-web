export type Order = {
  codvenda: number;
  DataEmissao: Date;
  HoraEntrada: Date;
  Mesa: number;
  Cliente: {
    Nome: string;
    Apelido: string;
    Celular: string;
    credito: number;
  };
  Vendadetalhe_temp?: [
    {
      Quantidade: number;
      ValorUnitario: number;
      ValorTotal: number;
      Produto: {
        codproduto: number;
        CodBarra: string;
        Descricao: string;
        urlImage: string;
      };
    }
  ];
};
