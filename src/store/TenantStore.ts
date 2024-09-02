import { create } from "zustand";
import { Tenant } from "../types/Tenent";
import { Address } from "../types/Address";

type TenantStore = {
  tenant: Tenant | null;
  shippingAdress: Address | null;
  shippingPrice: number;
  comanda: string | null;
  setTenant: (tenant: Tenant) => void;
};

export const useTenantStore = create<TenantStore>((set) => {
  return {
    tenant: null,
    shippingAdress: null,
    shippingPrice: 0,
    comanda: null,
    setTenant: (tenant: Tenant) => set({ tenant: tenant }),
    setShippingAddress: (shippingAdress: Address) => set((state) => ({ shippingAdress })),
    setShippingPrice: (shippingPrice: number) => set((state) => ({ shippingPrice })),
    setComanda: (comanda: string) => set((state) => ({ comanda })),
  };
});
