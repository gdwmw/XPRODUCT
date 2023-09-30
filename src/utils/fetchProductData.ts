const ENDPOINT_URL = "https://650c816247af3fd22f67b58e.mockapi.io/ProductData";

async function getProductData() {
  try {
    const res = await fetch(ENDPOINT_URL, { cache: "default" });
    return res.json();
  } catch (error) {
    console.error("An error occurred while retrieving data:", error);
    throw error;
  }
}

async function getProductDataId(id: number) {
  try {
    const res = await fetch(`${ENDPOINT_URL}/${id}`, { cache: "default" });
    return res.json();
  } catch (error) {
    console.error("An error occurred while retrieving data:", error);
    throw error;
  }
}

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

async function postProductData(value: postProductDataProps) {
  try {
    const res = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    return res.json();
  } catch (error) {
    console.error("An error occurred while sending data:", error);
    throw error;
  }
}

async function putProductData(value: any) {
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
    const res = await fetch(`${ENDPOINT_URL}/${id}`, {
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

async function deleteProductData(id: number) {
  try {
    const res = await fetch(`${ENDPOINT_URL}/${id}`, { method: "DELETE" });
    return res.json();
  } catch (error) {
    console.error("An error occurred while deleting data:", error);
    throw error;
  }
}

export { getProductData, getProductDataId, postProductData, putProductData, deleteProductData };
