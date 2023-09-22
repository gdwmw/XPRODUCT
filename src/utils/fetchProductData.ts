export async function fetchProductData() {
  const res = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/ProductData", { cache: "default" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
