import { ComboVendas } from "./Combo";

export type DadosNewVenda = {
  codUsuario: number;
  codvenda?: number;
  codProduto: number;
  codBarra: string;
  quantidade: number;
  precoVenda: number;
  mesa?: number;
  OBS?: string;
  combovendas?: ComboVendas[];
};
