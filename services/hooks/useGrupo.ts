import { Group } from "../../src/types/Group";
import { api } from "../api";

export async function getAllGrupos(tenantSlug: string): Promise<Group[]> {
  try {
    //
    const grupos = await api.get(`/grupo/${tenantSlug}`).then((res) => {
      const grupo: Group[] = res.data.map((item: Group) => {
        return item;
      });

      return grupo;
    });

    return grupos;
  } catch (error) {
    return [];
  }
}
