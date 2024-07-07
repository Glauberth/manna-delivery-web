import { Address } from "../../../src/types/Address";

export async function getAllAddress(email: string) {
  const addresses: Address[] = [];

  for (let i = 0; i < 1; i++) {
    addresses.push({
      id: i + 1,
      endereco: "VELHO JOHN",
      numero: `${i + 1}0`,
      bairro: "CALHAU",
      cep: "65052000",
      cidade: "São Luís",
      estado: "MA",
      complemento: "",
    });
  }

  return addresses;
}

export async function getOneAddress(addressid: number) {
  let address = {
    id: addressid,
    endereco: "rua 14, quadra 23",
    numero: `${addressid}0`,
    bairro: "Calhau",
    cep: "65110000",
    cidade: "São Luís",
    estado: "MA",
    complemento: "Próx a Padaria",
  };

  return address;
}

export async function newAddress(data: Address) {
  return { ...data, id: 9 };
}

export async function updateAddress(data: Address) {
  return true;
}

export async function deleteAddress(id: number) {
  return true;
}

export async function getShippingPrice(data: Address) {
  return 7;
}
