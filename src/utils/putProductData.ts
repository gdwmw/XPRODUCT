export async function putProductData(value: any) {
  try {
    const id = value.id;
    const editedValue = {
      productName: value.productName,
      productCategory: value.productCategory,
      productFreshness: value.productFreshness,
      imageOfProduct: value.imageOfProduct,
      additionalDescription: value.additionalDescription,
      productPrice: value.productPrice,
    };
    const res = await fetch(`https://650c816247af3fd22f67b58e.mockapi.io/ProductData/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedValue),
    });
    return res.json();
  } catch (error) {
    console.error("An error occurred while updating data:", error);
    throw error;
  }
}
