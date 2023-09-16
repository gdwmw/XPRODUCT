import React from "react";
import { useState } from "react";
import Image from "next/image";
import { uuid } from "uuidv4";

export default function Main({ languageProps }) {
  const [productName, setProductName] = useState("");
  const [productNameTernary, setProductNameBoolean] = useState(false);
  const [productCategory, setProductCategory] = useState("");
  const [productCategoryTernary, setProductCategoryBoolean] = useState(false);
  const [productFreshness, setProductFreshness] = useState("");
  const [productFreshnessBoolean, setProductFreshnessBoolean] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productImageBoolean, setProductImageBoolean] = useState(false);
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [additionalDescriptionTernary, setAdditionalDescriptionBoolean] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");
  const [randomNumberTernary, setRandomNumberBoolean] = useState(false);
  const [productData, setProductData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productName.length >= 6 &&
      productCategory !== "" &&
      productFreshness !== "" &&
      productImage !== null &&
      additionalDescription !== "" &&
      randomNumber !== ""
    ) {
      const uuID = uuid();
      const formattedUUID = `${uuID.slice(0, 5)}`;
      const newProductData = {
        id: formattedUUID,
        productName,
        productCategory,
        productFreshness,
        productImage,
        additionalDescription,
        randomNumber,
      };
      setProductData([...productData, newProductData]);
    } else {
      setProductNameBoolean(true);
      setProductCategoryBoolean(true);
      setAdditionalDescriptionBoolean(true);
      setRandomNumberBoolean(true);
      setProductFreshnessBoolean(true);
      setProductImageBoolean(true);
    }
  };

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 1000);
    setRandomNumber(random);
    console.log("Random Number:", random);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleDelete = (index) => {
    const shouldDelete = window.confirm(languageProps === "inggris" ? contentLanguage.table.alert.en : contentLanguage.table.alert.id);
    if (shouldDelete) {
      const updatedProductData = [...productData];
      updatedProductData.splice(index, 1);
      setProductData(updatedProductData);
    }
  };

  const filteredProductData = productData.filter((data) => data.productName.toLowerCase().includes(searchValue.toLowerCase()));

  const contentLanguage = {
    title: {
      en: "Detail Product",
      id: "Detil Produk",
    },
    input1: {
      en: "Product Name :",
      id: "Nama Produk :",
    },
    input2: {
      en: "Product Category :",
      id: "Kategori Produk :",
      option: {
        en: "Select",
        id: "Pilih",
      },
    },
    input3: {
      en: "Product Freshness :",
      id: "Kesegaran Produk :",
      option: {
        en: ["Brand New", "Second Hand", "Refurbished"],
        id: ["Barang Baru", "Tangan Kedua", "Diperbaharui"],
      },
    },
    input4: {
      en: "Image of Product",
      id: "Gambar Produk",
    },
    input5: {
      en: "Additional Description :",
      id: "Deskripsi Tambahan :",
    },
    input6: {
      en: "Product Price :",
      id: "Harga Produk :",
    },
    warning1: {
      en: `"Product Name" minimum 6 characters!`,
      id: `"Nama Produk" minimal 6 karakter!`,
    },
    warning2: {
      en: `"Product Name" maximum 25 characters!`,
      id: `"Nama Produk" maksimal 25 karakter!`,
    },
    warning3: {
      en: "Please select one of the options!",
      id: "Silakan pilih salah satu opsi!",
    },
    warning4: {
      en: "Can not be empty!",
      id: "Tidak boleh kosong!",
    },
    button1: {
      en: "Generate Random Price",
      id: "Hasilkan Harga Acak",
    },
    button2: {
      en: "Submit",
      id: "Kirim",
    },
    table: {
      en: "List of Products :",
      id: "Daftar Produk :",
      th: {
        en: ["Product Name", "Category", "Freshness", "Image", "Additional Description", "Price", "Action"],
        id: ["Nama Produk", "Kategori", "Kesegaran", "Gambar", "Deskripsi Tambahan", "Harga", "Aksi"],
      },
      button: {
        en: "Delete",
        id: "Hapus",
      },
      alert: {
        en: "Are you sure you want to delete this data?",
        id: "Apakah Anda yakin ingin menghapus data ini?",
      },
    },
    search: {
      en: "Search by Product Name :",
      id: "Cari berdasarkan Nama Produk :",
    },
  };

  const inputFieldStyle = {
    base: "w-full rounded border-2 px-4 py-2 outline-none focus:border-blue-500",
    error: "border-red-500",
  };

  const redText = "text-red-500";

  const buttonStyle = {
    primary: "cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300",
    secondary: "cursor-pointer rounded bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 transition duration-300",
    delete: "mx-auto my-2 bg-red-500 block text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300",
  };

  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32">
      <h2 className="mb-4 text-2xl font-semibold">{languageProps === "inggris" ? contentLanguage.title.en : contentLanguage.title.id}</h2>
      <section>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="productname">{languageProps === "inggris" ? contentLanguage.input1.en : contentLanguage.input1.id}</label>
            <input
              type="text"
              name="productname"
              id="productname"
              minLength="6"
              maxLength="50"
              onClick={() => setProductNameBoolean(true)}
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className={`${inputFieldStyle.base} ${
                productNameTernary && (productName.length < 6 || productName.length > 25) ? inputFieldStyle.error : ""
              }`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: productNameTernary && productName.length < 6 ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning1.en : contentLanguage.warning1.id}
          </p>
          <p className={`${redText}`} style={{ display: productName.length > 25 ? "block" : "none" }}>
            {languageProps === "inggris" ? contentLanguage.warning2.en : contentLanguage.warning2.id}
          </p>

          {/* Product Category */}
          <div className="form-group">
            <label htmlFor="productcategory">{languageProps === "inggris" ? contentLanguage.input2.en : contentLanguage.input2.id}</label>
            <select
              name="productcategory"
              id="productcategory"
              onClick={() => setProductCategoryBoolean(true)}
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
              className={`${inputFieldStyle.base} ${productCategoryTernary && productCategory === "" ? inputFieldStyle.error : ""}`}
            >
              <option value="">{languageProps === "inggris" ? contentLanguage.input2.option.en : contentLanguage.input2.option.id}</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <p
            className={`${redText}`}
            style={{
              display: productCategoryTernary && productCategory === "" ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning3.en : contentLanguage.warning3.id}
          </p>

          {/* Product Freshness */}
          <fieldset
            className={`field-set form-group ${inputFieldStyle.base} ${
              productFreshnessBoolean && productFreshness === "" ? inputFieldStyle.error : ""
            }`}
          >
            <legend className="font-semibold">{languageProps === "inggris" ? contentLanguage.input3.en : contentLanguage.input3.id}</legend>
            {languageProps === "inggris"
              ? contentLanguage.input3.option.en.map((option, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="options"
                      id={`option${index + 1}`}
                      onClick={() => setProductFreshness(option)}
                      value={option}
                      className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                    />
                    <label htmlFor={`option${index + 1}`}>{option}</label>
                    <br />
                  </React.Fragment>
                ))
              : contentLanguage.input3.option.id.map((option, index) => (
                  <React.Fragment key={index}>
                    <input
                      key={index}
                      type="radio"
                      name="options"
                      id={`option${index + 1}`}
                      onClick={() => setProductFreshness(option)}
                      value={option}
                      className="mr-2 outline-none focus:border-2 focus:border-blue-500"
                    />
                    <label htmlFor={`option${index + 1}`}>{option}</label>
                    <br />
                  </React.Fragment>
                ))}
          </fieldset>
          <p
            className={`${redText}`}
            style={{
              display: productCategoryTernary && productCategory === "" ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning3.en : contentLanguage.warning3.id}
          </p>

          {/* Image of Product */}
          <div className="form-group">
            <label htmlFor="image">{languageProps === "inggris" ? contentLanguage.input4.en : contentLanguage.input4.id}</label>
            <input
              type="file"
              name="image"
              id="image"
              onClick={() => setProductImageBoolean(true)}
              onChange={handleImageChange}
              className={`${inputFieldStyle.base} ${productImageBoolean && productImage === null ? inputFieldStyle.error : ""}`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: randomNumberTernary && randomNumber === "" ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
          </p>

          {/* Additional Description */}
          <div className="form-group">
            <label htmlFor="additionaldesc">{languageProps === "inggris" ? contentLanguage.input5.en : contentLanguage.input5.id}</label>
            <textarea
              name="additionaldesc"
              id="additionaldesc"
              cols="50"
              rows="10"
              onClick={() => setAdditionalDescriptionBoolean(true)}
              onChange={(e) => setAdditionalDescription(e.target.value)}
              value={additionalDescription}
              className={`${inputFieldStyle.base} ${additionalDescriptionTernary && additionalDescription === "" ? inputFieldStyle.error : ""}`}
            ></textarea>
          </div>
          <p
            className={`${redText}`}
            style={{
              display: additionalDescriptionTernary && additionalDescription === "" ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
          </p>

          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="price">{languageProps === "inggris" ? contentLanguage.input6.en : contentLanguage.input6.id}</label>
            <input
              type="text"
              name="price"
              id="price"
              onClick={() => setRandomNumberBoolean(true)}
              onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
              value={randomNumber}
              className={`${inputFieldStyle.base} ${randomNumberTernary && randomNumber === "" ? inputFieldStyle.error : ""}`}
              disabled
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: randomNumberTernary && randomNumber === "" ? "block" : "none",
            }}
          >
            {languageProps === "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <button type="button" className={`${buttonStyle.secondary}`} onClick={generateRandomNumber}>
              {languageProps === "inggris" ? contentLanguage.button1.en : contentLanguage.button1.id}
            </button>

            <button type="submit" className={`${buttonStyle.primary}`}>
              {languageProps === "inggris" ? contentLanguage.button2.en : contentLanguage.button2.id}
            </button>
          </div>
        </form>
      </section>

      {/* Search */}
      <section className="mt-5">
        <label htmlFor="searchusername" className="mb-1 block">
          {languageProps === "inggris" ? contentLanguage.search.en : contentLanguage.search.id}
        </label>
        <input
          type="text"
          name="searchusername"
          id="searchusername"
          className="w-[300px] rounded border-2 px-4 py-2 outline-none focus:border-blue-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>

      {/* Table */}
      <section className="mt-5 overflow-scroll">
        <label htmlFor="productlist" className="mb-1 block">
          {languageProps === "inggris" ? contentLanguage.table.en : contentLanguage.table.id}
        </label>
        <table className="w-full border-collapse rounded border-2">
          <thead>
            <tr>
              <th className="border-2 px-2">No/UUID</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[0] : contentLanguage.table.th.id[0]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[1] : contentLanguage.table.th.id[1]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[2] : contentLanguage.table.th.id[2]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[3] : contentLanguage.table.th.id[3]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[4] : contentLanguage.table.th.id[4]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[5] : contentLanguage.table.th.id[5]}</th>
              <th className="border-2 px-2">{languageProps === "inggris" ? contentLanguage.table.th.en[6] : contentLanguage.table.th.id[6]}</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredProductData.map((data, index) => (
              <tr key={index}>
                <td className="border-2 px-2 py-2">{`0${index + 1}/${data.id}`}</td>
                <td className="border-2 px-2 py-2">{data.productName}</td>
                <td className="border-2 px-2 py-2">{data.productCategory}</td>
                <td className="border-2 px-2 py-2">{data.productFreshness}</td>
                <td className="border-2 px-2 py-2">
                  {data.productImage ? (
                    <Image
                      src={URL.createObjectURL(data.productImage)}
                      alt="Product"
                      width={100}
                      height={0}
                      style={{ height: "auto", margin: "0px auto 0px auto" }}
                    />
                  ) : (
                    ""
                  )}
                </td>
                <td className="border-2 px-2 py-2">{data.additionalDescription}</td>
                <td className="border-2 px-2 py-2">{data.randomNumber}</td>
                <td className="border-2 px-2 py-2">
                  <button className={`${buttonStyle.delete}`} onClick={() => handleDelete(index)}>
                    {languageProps === "inggris" ? contentLanguage.table.button.en : contentLanguage.table.button.id}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
