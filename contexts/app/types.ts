import { Dispatch, ReactNode } from "react";
import { Address } from "../../src/types/Address";
import { Tenant } from "../../src/types/Tenent";

export type DataType = {
  tenant: Tenant | null;
  shippingAddress: Address | null;
  shippingPrice: number;
  comanda: string | null;
};

export type ActionType = {
  type: Actions;
  payload?: any;
};

export type ContextType = {
  state: DataType;
  dispatch: Dispatch<ActionType>;
};

export type ProviderType = {
  children: ReactNode;
};

export enum Actions {
  SET_TENANT,
  SET_SHIPPING_ADDRESS,
  SET_SHIPPING_PRICE,
  SET_COMANDA,
}
