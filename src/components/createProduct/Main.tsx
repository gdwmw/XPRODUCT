import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductData } from "@/utils/fetchProductData";
import { deleteProductData } from "@/utils/deleteProductData";
import { postProductData } from "@/utils/postProductData";

interface ProductData {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  productImage: string | null;
  additionalDescription: string;
  randomNumber: number;
}

type MainProps = {
  languageProps: string;
};

export default function Main({ languageProps }: MainProps) {
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
      button1: {
        en: "Detail",
        id: "Detail",
      },
      button2: {
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

  let id: number = 0;
  const [productName, setProductName] = useState<string>("");
  const [productNameBoolean, setProductNameBoolean] = useState<boolean>(false);
  const [productCategory, setProductCategory] = useState<string>("");
  const [productCategoryBoolean, setProductCategoryBoolean] = useState<boolean>(false);
  const [productFreshness, setProductFreshness] = useState<string>("");
  const [productFreshnessBoolean, setProductFreshnessBoolean] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<string | null>(null);
  const [productImageBoolean, setProductImageBoolean] = useState<boolean>(false);
  const [additionalDescription, setAdditionalDescription] = useState<string>("");
  const [additionalDescriptionBoolean, setAdditionalDescriptionBoolean] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [randomNumberBoolean, setRandomNumberBoolean] = useState<boolean>(false);
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProductImage(result);
      };

      reader.readAsDataURL(file);
    }
  };

  const generateRandomNumber = () => {
    const random: number = Math.floor(Math.random() * 1000);
    setRandomNumber(random);
    console.log("Random Number:", random);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      productName.length >= 6 &&
      productCategory !== "" &&
      productFreshness !== "" &&
      productImage !== null &&
      additionalDescription !== "" &&
      randomNumber !== 0
    ) {
      id++;
      const newProductData: ProductData = {
        id,
        productName,
        productCategory,
        productFreshness,
        productImage,
        additionalDescription,
        randomNumber,
      };

      const response = await postProductData(newProductData);
      setProductData([...productData, response]);

      setProductName("---");
      setProductCategory("");
      setAdditionalDescription("---");
      setRandomNumber(0);
      setProductNameBoolean(false);
      setProductCategoryBoolean(false);
      setProductFreshnessBoolean(false);
      setProductImageBoolean(false);
      setAdditionalDescriptionBoolean(false);
      setRandomNumberBoolean(false);
    } else {
      setProductNameBoolean(true);
      setProductCategoryBoolean(true);
      setProductFreshnessBoolean(true);
      setProductImageBoolean(true);
      setAdditionalDescriptionBoolean(true);
      setRandomNumberBoolean(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductData();
      setProductData(response);
    };
    fetchData();
  }, []);

  const filteredProductData = productData.filter((data) => data.productName.toLowerCase().includes(searchValue.toLowerCase()));

  const deleteProduct = async (id: number) => {
    await deleteProductData(id);
  };

  const handleDelete = (id: number) => {
    const shouldDelete = window.confirm(languageProps === "inggris" ? contentLanguage.table.alert.en : contentLanguage.table.alert.id);
    if (shouldDelete) {
      const updatedProductData = [...productData];
      const deletedIndex = updatedProductData.findIndex((item) => item.id === id);
      if (deletedIndex !== -1) {
        updatedProductData.splice(deletedIndex, 1);
        setProductData(updatedProductData);

        deleteProduct(id);
      }
    }
  };

  const inputFieldStyle = {
    base: "w-full rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue",
    error: "w-full rounded border-2 border-red-300 px-4 py-2 outline-none focus:border-tailwindBlue",
  };

  const redText = "text-red-400";

  const buttonStyle = {
    primary: "rounded bg-tailwindBlue px-4 py-2 text-white hover:bg-tailwindBlueSecondary",
    secondary: "rounded bg-tailwindGreen px-4 py-2 text-white hover:bg-tailwindGreenSecondary",
    delete: "rounded bg-red-400 px-4 py-2 text-white hover:bg-red-500",
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
              onClick={() => setProductNameBoolean(true)}
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              className={`${
                productNameBoolean && (productName.length < 6 || productName.length > 25) ? inputFieldStyle.error : inputFieldStyle.base
              }`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: productNameBoolean && productName.length < 6 ? "block" : "none",
            }}>
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
              className={`${productCategoryBoolean && productCategory === "" ? inputFieldStyle.error : inputFieldStyle.base}`}>
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
              display: productCategoryBoolean && productCategory === "" ? "block" : "none",
            }}>
            {languageProps === "inggris" ? contentLanguage.warning3.en : contentLanguage.warning3.id}
          </p>

          {/* Product Freshness */}
          <fieldset
            className={`field-set form-group ${productFreshnessBoolean && productFreshness === "" ? inputFieldStyle.error : inputFieldStyle.base}`}>
            <legend className="font-semibold">{languageProps === "inggris" ? contentLanguage.input3.en : contentLanguage.input3.id}</legend>
            {languageProps === "inggris"
              ? contentLanguage.input3.option.en.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="options"
                      id={`option${index + 1}`}
                      onClick={() => setProductFreshness(option)}
                      value={option}
                      className="mr-2 h-4 w-4 border-gray-400 bg-gray-100 text-tailwindBlue focus:ring-2 focus:ring-tailwindBlue"
                    />
                    <label htmlFor={`option${index + 1}`}>{option}</label>
                    <br />
                  </div>
                ))
              : contentLanguage.input3.option.id.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="options"
                      id={`option${index + 1}`}
                      onClick={() => setProductFreshness(option)}
                      value={option}
                      className="mr-2 h-4 w-4 border-gray-400 bg-gray-100 text-tailwindBlue focus:ring-2 focus:ring-tailwindBlue"
                    />
                    <label htmlFor={`option${index + 1}`}>{option}</label>
                    <br />
                  </div>
                ))}
          </fieldset>
          <p
            className={`${redText}`}
            style={{
              display: productFreshnessBoolean && productFreshness === "" ? "block" : "none",
            }}>
            {languageProps === "inggris" ? contentLanguage.warning3.en : contentLanguage.warning3.id}
          </p>

          {/* Image of Product */}
          <div className="form-group">
            <label htmlFor="image">{languageProps === "inggris" ? contentLanguage.input4.en : contentLanguage.input4.id}</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleImageChange}
              className={`${productImageBoolean && productImage === null ? inputFieldStyle.error : inputFieldStyle.base}`}
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: productImageBoolean && productImage === null ? "block" : "none",
            }}>
            {languageProps === "inggris" ? contentLanguage.warning4.en : contentLanguage.warning4.id}
          </p>

          {/* Additional Description */}
          <div className="form-group">
            <label htmlFor="additionaldesc">{languageProps === "inggris" ? contentLanguage.input5.en : contentLanguage.input5.id}</label>
            <textarea
              name="additionaldesc"
              id="additionaldesc"
              cols={50}
              rows={10}
              onClick={() => setAdditionalDescriptionBoolean(true)}
              onChange={(e) => setAdditionalDescription(e.target.value)}
              value={additionalDescription}
              className={`${additionalDescriptionBoolean && additionalDescription === "" ? inputFieldStyle.error : inputFieldStyle.base}`}></textarea>
          </div>
          <p
            className={`${redText}`}
            style={{
              display: additionalDescriptionBoolean && additionalDescription === "" ? "block" : "none",
            }}>
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
              value={randomNumber}
              className={`${randomNumberBoolean && randomNumber === 0 ? inputFieldStyle.error : inputFieldStyle.base}`}
              disabled
            />
          </div>
          <p
            className={`${redText}`}
            style={{
              display: randomNumberBoolean && randomNumber === 0 ? "block" : "none",
            }}>
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
          className="w-[300px] rounded border-2 border-gray-200 px-4 py-2 outline-none focus:border-tailwindBlue"
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
              <th className="border-2 px-2">No</th>
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
                <td className="border-2 px-2 py-2">{`0${index + 1}`}</td>
                <td className="border-2 px-2 py-2">{data.productName}</td>
                <td className="border-2 px-2 py-2">{data.productCategory}</td>
                <td className="border-2 px-2 py-2">{data.productFreshness}</td>
                <td className="border-2 px-2 py-2">
                  {data.productImage ? <Image src={data.productImage} alt="Product Image" width={100} height={0} className="mx-auto h-auto" /> : ""}
                </td>
                <td className="border-2 px-2 py-2">{data.additionalDescription}</td>
                <td className="border-2 px-2 py-2">{data.randomNumber}</td>
                <td className="border-2 px-2 py-2">
                  <div className="flex items-center justify-center gap-3">
                    <Link href={`/productdetail/${index + 1}`} scroll={false}>
                      <button className={`${buttonStyle.secondary}`}>
                        {languageProps === "inggris" ? contentLanguage.table.button1.en : contentLanguage.table.button1.id}
                      </button>
                    </Link>
                    <button className={`${buttonStyle.delete}`} onClick={() => handleDelete(data.id)}>
                      {languageProps === "inggris" ? contentLanguage.table.button2.en : contentLanguage.table.button2.id}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
