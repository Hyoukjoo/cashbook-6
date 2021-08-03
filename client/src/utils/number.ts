export const formatToCurrency = (amount: number) => {
  const formated = Intl.NumberFormat().format(amount);
  return formated;
};
