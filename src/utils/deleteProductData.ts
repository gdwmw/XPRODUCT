export async function deleteProductData(id: number) {
  try {
    const res = await fetch(`https://650c816247af3fd22f67b58e.mockapi.io/ProductData/${id}`, { method: "DELETE" });
    return res.json();
  } catch (error) {
    console.error("An error occurred while deleting data:", error);
    throw error;
  }
}
