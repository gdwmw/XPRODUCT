const API_ENDPOINT: string = "https://650c816247af3fd22f67b58e.mockapi.io/ProductData";

async function handleResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function fetchProductData() {
  try {
    const response: Response = await fetch(API_ENDPOINT, { cache: "default" });
    return handleResponse(response);
  } catch (error) {
    console.error("An error occurred while retrieving data:", error);
    throw error;
  }
}

async function fetchProductDataById(id: number) {
  try {
    const response: Response = await fetch(`${API_ENDPOINT}/${id}`, { cache: "default" });
    return handleResponse(response);
  } catch (error) {
    console.error("An error occurred while retrieving data:", error);
    throw error;
  }
}

type ProductDataProps = {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  imageOfProduct: string;
  additionalDescription: string;
  productPrice: number;
};

async function createProductData(productData: ProductDataProps) {
  try {
    const response: Response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("An error occurred while sending data:", error);
    throw error;
  }
}

type EditedData = {
  productName: string;
  productCategory: string;
  productFreshness: string;
  imageOfProduct: string;
  additionalDescription: string;
  productPrice: number;
};

async function updateProductData(updatedData: ProductDataProps) {
  try {
    const id: number = updatedData.id;
    const editedData: EditedData = {
      productName: updatedData.productName,
      productCategory: updatedData.productCategory,
      productFreshness: updatedData.productFreshness,
      imageOfProduct: updatedData.imageOfProduct,
      additionalDescription: updatedData.additionalDescription,
      productPrice: updatedData.productPrice,
    };
    const response: Response = await fetch(`${API_ENDPOINT}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("An error occurred while updating data:", error);
    throw error;
  }
}

async function deleteProductDataById(id: number) {
  try {
    const response: Response = await fetch(`${API_ENDPOINT}/${id}`, { method: "DELETE" });
    return handleResponse(response);
  } catch (error) {
    console.error("An error occurred while deleting data:", error);
    throw error;
  }
}

export { fetchProductData, fetchProductDataById, createProductData, updateProductData, deleteProductDataById };
