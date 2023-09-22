export async function deleteProductData(id: number) {
  const res = await fetch(`https://650c816247af3fd22f67b58e.mockapi.io/ProductData/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("Failed deleting data");
  }
  return res.json();
}
