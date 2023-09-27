"use client";

// VALUE
interface interfaceValue {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  imageOfProduct: string;
  additionalDescription: string;
  productPrice: number;
  searchProductName: string;
}
// WARNING
interface interfaceWarning {
  w1: boolean;
  w2: boolean;
  w3: boolean;
  w4: boolean;
  w5: boolean;
  w6: boolean;
}

// LIBRARY
import { useState, useEffect } from "react";
import Image from "next/image";

// COMPONENTS
import InputText from "./inputs/InputText";
import Select from "./inputs/Select";
import InputRadio from "./inputs/InputRadio";
import InputFile from "./inputs/InputFile";
import TextArea from "./inputs/TextArea";
import InputNumber from "./inputs/InputNumber";
import Warning from "./inputs/Warning";

// UTILS
import { getProductData } from "@/utils/getProductData";
import { postProductData } from "@/utils/postProductData";
import { deleteProductData } from "@/utils/deleteProductData";

export default function Main() {
  // RESPOND DATA
  const [resData, setResData] = useState([]);

  // GET DATA
  const getData = async () => {
    const res = await getProductData();
    setResData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  // VALUE
  const [value, setValue] = useState<interfaceValue>({
    id: 0,
    productName: "",
    productCategory: "",
    productFreshness: "",
    imageOfProduct: "",
    additionalDescription: "",
    productPrice: 0,
    searchProductName: "",
  });

  // WARNING
  const [warning, setWarning] = useState<interfaceWarning>({
    w1: false,
    w2: false,
    w3: false,
    w4: false,
    w5: false,
    w6: false,
  });

  // HANDLE IMAGE OF PRODUCT
  const handleImageOfProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setValue({ ...value, imageOfProduct: result });
      };
      reader.readAsDataURL(file);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async () => {
    if (
      value.productName.length >= 6 &&
      value.productName.length <= 25 &&
      value.productCategory &&
      value.productFreshness &&
      value.imageOfProduct &&
      value.additionalDescription &&
      value.productPrice
    ) {
      await postProductData(value);
      getData();
      setValue({
        ...value,
        productName: "",
        productCategory: "",
        productFreshness: "",
        imageOfProduct: "",
        additionalDescription: "",
        productPrice: 0,
      });
      setWarning({ ...warning, w1: false, w2: false, w3: false, w4: false, w5: false, w6: false });
    } else {
      setWarning({ ...warning, w1: true, w2: true, w3: true, w4: true, w5: true, w6: true });
    }
  };

  // HANDLE DELETE
  const handleDelete = async (id: number) => {
    const deleteConfirm = window.confirm("Are you sure want to delete this data?");
    if (deleteConfirm) {
      await deleteProductData(id);
      getData();
    }
  };
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <h2 className="mb-4 text-2xl font-semibold">Detail Product</h2>
      <section>
        <form className="flex flex-col gap-3">
          {/* PRODUCT NAME */}
          <InputText
            label="Product Name :"
            name="productName"
            value={value.productName}
            onClick={() => setWarning({ ...warning, w1: true })}
            onChange={(e) => setValue({ ...value, productName: e.target.value })}
            classBoolean={warning.w1 ? (value.productName.length >= 6 && value.productName.length <= 25 ? false : true) : false}
          />
          <Warning label="Minimum 6 characters!" displayBoolean={warning.w1 ? (value.productName.length >= 6 ? false : true) : false} />
          <Warning label="Maximum 25 characters!" displayBoolean={warning.w1 ? (value.productName.length <= 25 ? false : true) : false} />

          {/* PRODUCT CATEGORY */}
          <Select
            label="Product Category :"
            name="productCategory"
            value={value.productCategory}
            onClick={() => setWarning({ ...warning, w2: true })}
            onChange={(e) => setValue({ ...value, productCategory: e.target.value })}
            classBoolean={warning.w2 ? (value.productCategory ? false : true) : false}
          >
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </Select>
          <Warning label="Please select one of the options!" displayBoolean={warning.w2 ? (value.productCategory ? false : true) : false} />

          {/* PRODUCT FRESHNESS */}
          <fieldset
            className={`flex flex-col border-2 p-2 ${
              warning.w3 ? (value.productFreshness ? "border-gray-200" : "border-red-300") : "border-gray-200"
            }`}
          >
            <legend className="px-2 font-semibold">Product Freshness :</legend>
            <InputRadio
              label="Brand New"
              name="productFreshness"
              id="option1"
              onClick={() => setValue({ ...value, productFreshness: "Brand New" })}
            />
            <InputRadio
              label="Second Hand"
              name="productFreshness"
              id="option2"
              onClick={() => setValue({ ...value, productFreshness: "Second Hand" })}
            />
            <InputRadio
              label="Refurbished"
              name="productFreshness"
              id="option3"
              onClick={() => setValue({ ...value, productFreshness: "Refurbished" })}
            />
          </fieldset>
          <Warning label="Please select one of the options!" displayBoolean={warning.w3 ? (value.productFreshness ? false : true) : false} />

          {/* IMAGE OF PRODUCT */}
          <InputFile
            label="Image of Product :"
            name="imageOfProduct"
            accept="image/*"
            onClick={() => setWarning({ ...warning, w4: true })}
            onChange={handleImageOfProduct}
            classBoolean={warning.w4 ? (value.imageOfProduct ? false : true) : false}
          />
          <Warning label="Can not be empty!" displayBoolean={warning.w4 ? (value.imageOfProduct ? false : true) : false} />

          {/* ADDITIONAL DESCRIPTION */}
          <TextArea
            label="Additional Description :"
            name="additionalDescription"
            value={value.additionalDescription}
            onClick={() => setWarning({ ...warning, w5: true })}
            onChange={(e) => setValue({ ...value, additionalDescription: e.target.value })}
            rows={10}
            cols={50}
            classBoolean={warning.w5 ? (value.additionalDescription ? false : true) : false}
          />
          <Warning label="Can not be empty!" displayBoolean={warning.w5 ? (value.additionalDescription ? false : true) : false} />

          {/* PRODUCT PRICE */}
          <InputNumber
            label="Product Price :"
            name="productPrice"
            value={value.productPrice}
            onClick={() => setWarning({ ...warning, w6: true })}
            onChange={(e) => setValue({ ...value, productPrice: e.target.value })}
            classBoolean={warning.w6 ? (value.productPrice ? false : true) : false}
          />
          <Warning label="Can not be empty!" displayBoolean={warning.w6 ? (value.productPrice ? false : true) : false} />

          {/* BUTTONS */}
          <div className="flex items-center gap-5">
            {/* GENERATE RANDOM PRICE */}
            <button type="button" className="rounded bg-tailwindGreen px-4 py-2 text-white hover:bg-tailwindGreenSecondary">
              Generate Random Price
            </button>

            {/* SUBMIT */}
            <button type="button" onClick={handleSubmit} className="rounded bg-tailwindBlue px-4 py-2 text-white hover:bg-tailwindBlueSecondary">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* SEARCH */}
      <section className="mt-5 w-[300px]">
        <InputText
          label="Search by Product Name :"
          name="searchProductName"
          value={value.searchProductName}
          onClick={() => {}}
          onChange={(e) => {
            setValue({ ...value, searchProductName: e.target.value });
          }}
          classBoolean={false}
        />
      </section>

      {/* TABLE */}
      <section className="mt-5 overflow-scroll">
        <label htmlFor="listOfProduct">
          <span>List of Products :</span>
          <table id="listOfProduct" className="w-full border-collapse border-2">
            <thead>
              <tr>
                <th className="border-2 px-2">No</th>
                <th className="border-2 px-2">Name</th>
                <th className="border-2 px-2">Category</th>
                <th className="border-2 px-2">Freshness</th>
                <th className="border-2 px-2">Image</th>
                <th className="border-2 px-2">Description</th>
                <th className="border-2 px-2">Price</th>
                <th className="border-2 px-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {resData.map((item: interfaceValue, index: number) => (
                <tr key={index}>
                  <td className="border-2 p-2">{item.id}</td>
                  <td className="border-2 p-2">{item.productName}</td>
                  <td className="border-2 p-2">{item.productCategory}</td>
                  <td className="border-2 p-2">{item.productFreshness}</td>
                  <td className="border-2 p-2">
                    <Image src={item.imageOfProduct} alt="Image Of Product" width={100} height={0} className="m-auto" />
                  </td>
                  <td className="border-2 p-2">{item.additionalDescription}</td>
                  <td className="border-2 p-2">{`$${item.productPrice}`}</td>
                  <td className="border-2 p-2">
                    <button type="button" onClick={() => handleDelete(item.id)} className="rounded bg-red-400 px-4 py-2 text-white hover:bg-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </label>
      </section>
    </main>
  );
}
