export type Combo = {
  CODCOMBO: number;
  CODBARRA: string;
  DESCRICAO: string;
  URLIMAGE: string;
  QUANTIDADE: number;
  CODPRODUTOCOMBO: number;
  CODGRUPO: number;
  TIPOCOMBO: number;
  NOME: string;
  PRECOVENDA: number;
  PRECOCUSTO: number;
  PERCENTUAL: number;
  codcombogrupo?: number;
};

export type COMBOGRUPO = {
  codcombogrupo: number;
  nomegrupo: string;
  obrigatorio: number;
  qtdmin: number;
  qtdmax: number;
  COMBO: Combo[];
};

export type ComboVendas = {
  CodComboVendas?: number;
  CodDetalheVenda?: number;
  CodProduto: number;
  Quantidade: number;
  Impresso: string;
  CodVenda?: number;
  PrecoVenda: number;
};
