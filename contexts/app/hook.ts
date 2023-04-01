import { useContext } from "react";
import { AppContext } from ".";
import { Address } from "../../src/types/Address";
import { Tenant } from "../../src/types/Tenent";
import { Actions } from "./types";

export const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);

  return {
    ...state,
    setTenant: (tenant: Tenant) => {
      dispatch({
        type: Actions.SET_TENANT,
        payload: { tenant },
      });
    },
    setShippingAddress: (shippingAddress: Address) => {
      dispatch({
        type: Actions.SET_SHIPPING_ADDRESS,
        payload: { shippingAddress },
      });
    },
    setShippingPrice: (shippingPrice: number) => {
      dispatch({
        type: Actions.SET_SHIPPING_PRICE,
        payload: { shippingPrice },
      });
    },
    setComanda: (comanda: string) => {
      dispatch({
        type: Actions.SET_COMANDA,
        payload: { comanda },
      });
    },
  };
};
