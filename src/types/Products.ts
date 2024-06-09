import { Combo } from "./Combo";

export type Product = {
  CODPRODUTO: number;
  URLIMAGE: string;
  CODGRUPO: number;
  NOME: string;
  DESCRICAO: string;
  OBSERVACAO?: string;
  PRECOVENDA: number;
  COMBO?: Combo[];
};
