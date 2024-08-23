"use client";

import { useEffect, useState } from "react";
import { Combo, COMBOGRUPO } from "../../types/Combo";
import { ComboItem } from "../ComboItem";

type Props = {
  ComboGrupo: COMBOGRUPO;
  Combo: Combo[];
  handleAddCombo: (combo: Combo) => void;
  colorTenant: string;
};

export function ComboGrupo({ ComboGrupo, Combo, handleAddCombo, colorTenant }: Props) {
  const [qtdTotalGrupo, setQtdTotalGrupo] = useState(0);
  const [isCompletQtdGrupo, setIsCompletQtdGrupo] = useState(false);

  useEffect(() => {
    if (qtdTotalGrupo == ComboGrupo.qtdmax) {
      setIsCompletQtdGrupo(true);
    } else {
      setIsCompletQtdGrupo(false);
    }
    console.log({ Grupo: ComboGrupo.nomegrupo, qtd: qtdTotalGrupo });
  }, [qtdTotalGrupo]);

  return (
    <>
      <div style={{ backgroundColor: "#ebebeb", borderRadius: "5px", padding: "10px" }}>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: "12px" }}>{ComboGrupo.nomegrupo}</div>
          <div style={{ fontSize: "10px", fontStyle: "oblique", marginTop: "5px" }}>
            {ComboGrupo.obrigatorio
              ? `Escolha uma opção entre ${ComboGrupo.qtdmin} até ${ComboGrupo.qtdmax}.`
              : `Escolha até ${ComboGrupo.qtdmax} opções.`}
          </div>
        </div>
      </div>
      <div>
        {Combo.map((item: Combo, indexProdutoCombo: number) => {
          return (
            <ComboItem
              key={indexProdutoCombo}
              color={colorTenant}
              combo={item}
              handleCombo={handleAddCombo}
              qtdMax={ComboGrupo.qtdmax}
              handleQtdTotalGrupo={setQtdTotalGrupo}
              qtdTotalGrupo={qtdTotalGrupo}
              isCompletQtdGrupo={isCompletQtdGrupo}
            />
          );
        })}
      </div>
    </>
  );
}
