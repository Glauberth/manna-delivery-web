import { Group } from "../../src/types/Group";
import { api } from "../api";

export async function getAllGrupos(tenantSlug: string) {
  let grupo: Group[] = [];

  await api
    .get(`/grupo/${tenantSlug}`)
    .then((res) => {
      res.data.forEach((item: Group) => {
        grupo.push({
          CODGRUPO: item.CODGRUPO,
          NOME: item.NOME,
          NOMEGRUPOAPP: item.NOMEGRUPOAPP,
        });
      });
    })
    .catch((err) => {
      // console.log(err);
    });

  // console.log(grupo);

  return grupo;
}
