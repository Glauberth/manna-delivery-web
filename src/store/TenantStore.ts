import { create } from "zustand";
import { Tenant } from "../types/Tenent";
import { Address } from "../types/Address";
import { User } from "../types/User";

type TenantStore = {
  tenant: Tenant | null;
  shippingAddress: Address | null;
  shippingPrice: number;
  comanda: string | null;
  user: User | null;
  token: string | null;
  setTenant: (tenant: Tenant) => void;
  setShippingAddress: (shippingAdress: Address) => void;
  setShippingPrice: (shippingPrice: number) => void;
  setComanda: (comanda: string) => void;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
};

export const useTenantStore = create<TenantStore>((set) => {
  return {
    tenant: null,
    shippingAddress: null,
    shippingPrice: 0,
    comanda: null,
    user: null,
    token: null,
    setTenant: (tenant: Tenant) => set({ tenant: tenant }),
    setShippingAddress: (shippingAddress: Address) => set((state) => ({ shippingAddress })),
    setShippingPrice: (shippingPrice: number) => set((state) => ({ shippingPrice })),
    setComanda: (comanda: string) => set((state) => ({ comanda })),
    setUser: (user: User) => set((state) => ({ user })),
    setToken: (token: string) => set((state) => ({ token })),
  };
});
