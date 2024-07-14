import { Combo } from "./Combo";

export type Product = {
  CODPRODUTO: number;
  CODBARRA: string;
  URLIMAGE: string;
  CODGRUPO: number;
  NOME: string;
  DESCRICAO: string;
  OBSERVACAO?: string;
  PRECOVENDA: number;
  PRECOPROMO?: number;
  COMBO?: Combo[];
};
