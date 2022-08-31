export const formatPrice = (
  price: number,
  minimumFractionDigits?: number
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
  }).format(price);
};

export const formatPercentage = (percent: number): string => {
  const value = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(percent / 100);

  return percent >= 0 ? `+${value}` : value;
};
