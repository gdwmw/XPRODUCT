export async function fetchProductData() {
  try {
    const res = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/ProductData", { cache: "default" });
    return res.json();
  } catch (error) {
    console.error("An error occurred while retrieving data:", error);
    throw error;
  }
}
