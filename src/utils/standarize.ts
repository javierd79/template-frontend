export default function standarize(value: number | string, country: string) {
  if (isNaN(Number(value))) {
    return "";
  }

  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}
