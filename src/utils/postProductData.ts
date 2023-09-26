type postProductDataProps = {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  imageOfProduct: string;
  additionalDescription: string;
  productPrice: number;
  searchProductName: string;
};

export async function postProductData(data: postProductDataProps) {
  try {
    const res = await fetch("https://650c816247af3fd22f67b58e.mockapi.io/ProductData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.error("An error occurred while sending data:", error);
    throw error;
  }
}
