export const useFormatter = () => ({
  formatPrice: (price: number) => {
    return price
      ? price.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })
      : "0";
  },
  formatQuantity: (quantity: number, minDigits: number) => {
    if (quantity.toString().length >= minDigits) return quantity.toString();

    const sobra = minDigits - quantity.toString().length;

    return `${"0".repeat(sobra)}${quantity}`;
  },
  formatDate: (date: string) => {
    let currentDate = new Date(`${date} 00:00:00`);
    return new Intl.DateTimeFormat("pt-BR").format(currentDate);
  },
});
