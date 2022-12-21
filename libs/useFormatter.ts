export const useFormatter = () => ({
  formatPrice: (price: number) => {
    return price.toLocaleString("pr-br", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },
  formatQuantity: (quantity: number, minDigits: number) => {
    if (quantity.toString().length >= minDigits) return quantity.toString();

    const sobra = minDigits - quantity.toString().length;

    return `${"0".repeat(sobra)}${quantity}`;
  },
});
