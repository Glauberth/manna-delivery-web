import { User } from "../../src/types/User";

export async function autorizeToken(token: string): Promise<User | false> {
  if (!token) return false;

  //Aqui falta ir la na API de fato e verificar se o token recebido é válido, se não for tem que devolvier null

  return {
    name: "Glauberth",
    email: "glauberth.sampaio@hotmail.com",
  };
}
