export async function fetchProductDataID(id: number) {
  const res = await fetch(`https://650c816247af3fd22f67b58e.mockapi.io/ProductData/${id}`, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
