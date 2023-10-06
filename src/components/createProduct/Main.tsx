"use client";

// VALUE INTERFACE
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
// WARNING INTERFACE
interface interfaceWarning {
  w1: boolean;
  w2: boolean;
  w3: boolean;
  w4: boolean;
  w5: boolean;
  w6: boolean;
}

// IMPORT LIBRARIES
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Image from "next/image";

// IMPORT COMPONENTS
import { locale } from "@/locales/createProduct/language";
import InputText from "./inputs/InputText";
import Select from "./inputs/Select";
import InputRadio from "./inputs/InputRadio";
import InputFile from "./inputs/InputFile";
import TextArea from "./inputs/TextArea";
import InputNumber from "./inputs/InputNumber";
import Warning from "./inputs/Warning";
import loadingAnimation from "@/images/Loading.svg";

// IMPORT UTILS
import { fetchProductData, fetchProductDataById, createProductData, updateProductData, deleteProductDataById } from "@/utils/fetchProductData";

export default function Main() {
  // USE SESSION
  const session = useSession();

  // DISABLED INPUTS
  const disabled: boolean = session.data?.user.role === "user" ? true : false;

  // REDUX LANGUAGE
  const lang = locale;
  const code: number = useSelector((state: any) => state.lang.code);

  // API RESPOND DATA STATE
  const [resData, setResData] = useState<interfaceValue[]>([]);

  // API GET DATA
  const getData = async () => {
    const res: interfaceValue[] = await fetchProductData();
    setResData(res);
  };
  useEffect(() => {
    getData();
  }, []);

  // VALUE STATE
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

  // WARNING STATE
  const [warning, setWarning] = useState<interfaceWarning>({
    w1: false,
    w2: false,
    w3: false,
    w4: false,
    w5: false,
    w6: false,
  });

  // LOADING STATE
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean[]>([]);

  // EDIT MODE STATE
  const [editMode, setEditMode] = useState<boolean>(false);

  // HANDLE IMAGE OF PRODUCT
  const handleImageOfProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e) => {
        const result: string = e.target?.result as string;
        setValue({ ...value, imageOfProduct: result });
      };
      reader.readAsDataURL(file);
    }
  };

  // GENERATE RANDOM PRICE
  const generateRandomPrice = () => {
    const minPrice: number = 1;
    const maxPrice: number = 1000;
    const randomPrice: number = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    setValue({ ...value, productPrice: randomPrice });
  };

  // HANDLE SUBMIT
  const handleSubmit = async () => {
    setLoading(true);
    setLoadingSubmit(true);
    if (editMode) {
      await updateProductData(value);
      await getData();
      setLoading(false);
      setLoadingSubmit(false);
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
      setEditMode(false);
    } else if (
      value.productName.length >= 6 &&
      value.productName.length <= 25 &&
      value.productCategory &&
      value.productFreshness &&
      value.imageOfProduct &&
      value.additionalDescription &&
      value.productPrice
    ) {
      await createProductData(value);
      await getData();
      setLoading(false);
      setLoadingSubmit(false);
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
      setLoading(false);
      setLoadingSubmit(false);
      setWarning({ ...warning, w1: true, w2: true, w3: true, w4: true, w5: true, w6: true });
    }
  };

  // SEARCH BY PRODUCT NAME
  const filteredData: interfaceValue[] = resData.filter((item: interfaceValue) =>
    item.productName.toLowerCase().includes(value.searchProductName.toLowerCase()),
  );

  // HANDLE EDIT
  const handleEdit = (index: number) => {
    if (!editMode) {
      setValue(resData[index]);
      setEditMode(true);
    } else {
      window.confirm(lang[code].main.confirm);
    }
  };

  // HANDLE DELETE
  const handleDelete = async (index: number) => {
    const deleteConfirm: boolean = window.confirm(lang[code].main.table.confirm);
    const id = index + 1;
    if (deleteConfirm) {
      const newLoadingDelete = [...loadingDelete];
      newLoadingDelete[index] = true;
      setLoading(true);
      setLoadingDelete(newLoadingDelete);
      await deleteProductDataById(id);
      await getData();
      newLoadingDelete[index] = false;
      setLoading(false);
      setLoadingDelete(newLoadingDelete);
    }
  };
  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <section>
        <h2 className="mb-4 text-2xl font-semibold">{lang[code].main.title}</h2>
        <form className="flex flex-col gap-3">
          {/* PRODUCT NAME */}
          <InputText
            label={lang[code].main.input.i1}
            name="productName"
            value={value.productName}
            onClick={() => setWarning({ ...warning, w1: true })}
            onChange={(e) => setValue({ ...value, productName: e.target.value })}
            classBoolean={warning.w1 ? (value.productName.length >= 6 && value.productName.length <= 25 ? false : true) : false}
            disabled={loading || disabled ? true : false}
          />
          <Warning label={lang[code].main.warning.w1} displayBoolean={warning.w1 ? (value.productName.length >= 6 ? false : true) : false} />
          <Warning label={lang[code].main.warning.w2} displayBoolean={warning.w1 ? (value.productName.length <= 25 ? false : true) : false} />

          {/* PRODUCT CATEGORY */}
          <Select
            label={lang[code].main.input.i2.label}
            name="productCategory"
            value={value.productCategory}
            onClick={() => setWarning({ ...warning, w2: true })}
            onChange={(e) => setValue({ ...value, productCategory: e.target.value })}
            classBoolean={warning.w2 ? (value.productCategory ? false : true) : false}
            disabled={loading || disabled ? true : false}
          >
            <option value="">{lang[code].main.input.i2.option}</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </Select>
          <Warning label={lang[code].main.warning.w3} displayBoolean={warning.w2 ? (value.productCategory ? false : true) : false} />

          {/* PRODUCT FRESHNESS */}
          <fieldset
            className={`flex flex-col border-2 p-2 ${
              warning.w3 ? (value.productFreshness ? "border-gray-200" : "border-red-300") : "border-gray-200"
            }`}
          >
            <legend className="px-2 font-semibold">{lang[code].main.input.i3.label}</legend>
            <InputRadio
              label={lang[code].main.input.i3.option[0]}
              name="productFreshness"
              id="option1"
              onClick={() => setValue({ ...value, productFreshness: "Brand New" })}
              disabled={loading || disabled ? true : false}
            />
            <InputRadio
              label={lang[code].main.input.i3.option[1]}
              name="productFreshness"
              id="option2"
              onClick={() => setValue({ ...value, productFreshness: "Second Hand" })}
              disabled={loading || disabled ? true : false}
            />
            <InputRadio
              label={lang[code].main.input.i3.option[2]}
              name="productFreshness"
              id="option3"
              onClick={() => setValue({ ...value, productFreshness: "Refurbished" })}
              disabled={loading || disabled ? true : false}
            />
          </fieldset>
          <Warning label={lang[code].main.warning.w3} displayBoolean={warning.w3 ? (value.productFreshness ? false : true) : false} />

          {/* IMAGE OF PRODUCT */}
          <InputFile
            label={lang[code].main.input.i4}
            name="imageOfProduct"
            accept="image/*"
            onClick={() => setWarning({ ...warning, w4: true })}
            onChange={handleImageOfProduct}
            classBoolean={warning.w4 ? (value.imageOfProduct ? false : true) : false}
            disabled={loading || disabled ? true : false}
          />
          <Warning label={lang[code].main.warning.w4} displayBoolean={warning.w4 ? (value.imageOfProduct ? false : true) : false} />

          {/* ADDITIONAL DESCRIPTION */}
          <TextArea
            label={lang[code].main.input.i5}
            name="additionalDescription"
            value={value.additionalDescription}
            onClick={() => setWarning({ ...warning, w5: true })}
            onChange={(e) => setValue({ ...value, additionalDescription: e.target.value })}
            rows={10}
            cols={50}
            classBoolean={warning.w5 ? (value.additionalDescription ? false : true) : false}
            disabled={loading || disabled ? true : false}
          />
          <Warning label={lang[code].main.warning.w4} displayBoolean={warning.w5 ? (value.additionalDescription ? false : true) : false} />

          {/* PRODUCT PRICE */}
          <InputNumber
            label={lang[code].main.input.i6}
            name="productPrice"
            value={value.productPrice}
            onClick={() => setWarning({ ...warning, w6: true })}
            onChange={(e) => setValue({ ...value, productPrice: e.target.value })}
            classBoolean={warning.w6 ? (value.productPrice ? false : true) : false}
            disabled={loading || disabled ? true : false}
          />
          <Warning label={lang[code].main.warning.w4} displayBoolean={warning.w6 ? (value.productPrice ? false : true) : false} />

          {/* BUTTONS */}
          <div className="flex items-center gap-5">
            {/* GENERATE RANDOM PRICE */}
            <button
              type="button"
              onClick={generateRandomPrice}
              className={`rounded bg-tailwindGreen px-4 py-2 text-white hover:bg-tailwindGreenSecondary ${
                loading || disabled ? "cursor-not-allowed" : ""
              }`}
              disabled={loading || disabled ? true : false}
            >
              {lang[code].main.button.b1}
            </button>

            {/* SUBMIT */}
            <button
              type="button"
              onClick={handleSubmit}
              className={`flex items-center justify-center gap-1 rounded px-4 py-2 text-white ${
                loading && loadingSubmit
                  ? "cursor-wait bg-tailwindBlueSecondary/50"
                  : `bg-tailwindBlue hover:bg-tailwindBlueSecondary ${loading || disabled ? "cursor-not-allowed" : ""}`
              }`}
              disabled={loading || disabled ? true : false}
            >
              {editMode ? lang[code].main.button.b2[1] : lang[code].main.button.b2[0]}
              {loading && loadingSubmit && <Image src={loadingAnimation} alt="Loading" width={20} height={0} loading="eager" />}
            </button>
          </div>
        </form>
      </section>

      {/* SEARCH BY PRODUCT NAME */}
      <section className="mt-5 w-[300px]">
        <InputText
          label={lang[code].main.search}
          name="searchProductName"
          value={value.searchProductName}
          onClick={() => {}}
          onChange={(e) => {
            setValue({ ...value, searchProductName: e.target.value });
          }}
          classBoolean={false}
          disabled={loading || disabled ? true : false}
        />
      </section>

      {/* TABLE LIST PRODUCT */}
      <section className="mt-5 overflow-scroll">
        <label htmlFor="listOfProduct">
          <span>{lang[code].main.table.label}</span>
          <table id="listOfProduct" className="w-full border-collapse border-2">
            <thead>
              <tr>
                <th className="border-2 px-2">No</th>
                <th className="border-2 px-2">{lang[code].main.table.header[0]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[1]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[2]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[3]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[4]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[5]}</th>
                <th className="border-2 px-2">{lang[code].main.table.header[6]}</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredData.map((item: interfaceValue, index: number) => (
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
                    {/* BUTTONS */}
                    <div className="flex items-center justify-center gap-2">
                      {/* EDIT */}
                      <button
                        type="button"
                        onClick={() => handleEdit(index)}
                        className={`rounded bg-tailwindGreen px-4 py-2 text-white hover:bg-tailwindGreenSecondary ${
                          loading || disabled ? "cursor-not-allowed" : ""
                        }`}
                        disabled={loading || disabled ? true : false}
                      >
                        {lang[code].main.table.button.b1}
                      </button>

                      {/* DELETE */}
                      <button
                        type="button"
                        onClick={() => handleDelete(index)}
                        onLoad={() => setLoadingDelete([...loadingDelete, false])}
                        className={`flex items-center justify-center gap-1 rounded  px-4 py-2 text-white ${
                          loading && loadingDelete[index]
                            ? "cursor-wait bg-red-400/50"
                            : `bg-red-400 hover:bg-red-500 ${loading || disabled ? "cursor-not-allowed" : ""}`
                        } `}
                        disabled={loading || disabled ? true : false}
                      >
                        {lang[code].main.table.button.b2}
                        {loading && loadingDelete[index] && <Image src={loadingAnimation} alt="Loading" width={20} height={0} loading="eager" />}
                      </button>
                    </div>
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
