import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";
import { fetchProductDataID } from "@/utils/fetchProductDataID";

interface ProductData {
  id: number;
  productName: string;
  productCategory: string;
  productFreshness: string;
  productImage: string;
  additionalDescription: string;
  randomNumber: number;
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const productData: ProductData = await fetchProductDataID(id);

  return (
    <Suspense fallback={<Loading />}>
      <section className="container mx-auto px-5 py-5">
        <table className="w-full border-collapse rounded border-2">
          <thead>
            <tr>
              <th className="border-2 px-2">Product Name</th>
              <th className="border-2 px-2">Category</th>
              <th className="border-2 px-2">Freshness</th>
              <th className="border-2 px-2">Product Image</th>
              <th className="border-2 px-2">Additional Description</th>
              <th className="border-2 px-2">Price</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border-2 px-2 py-2">{productData?.productName}</td>
              <td className="border-2 px-2 py-2">{productData?.productCategory}</td>
              <td className="border-2 px-2 py-2">{productData?.productFreshness}</td>
              <td className="border-2 px-2 py-2">
                <Image
                  src={!productData ? "" : productData.productImage}
                  alt="Product"
                  width={100}
                  height={100}
                  style={{ height: "auto", margin: "0px auto 0px auto" }}
                />
              </td>
              <td className="border-2 px-2 py-2">{productData?.additionalDescription}</td>
              <td className="border-2 px-2 py-2">{productData?.randomNumber}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Suspense>
  );
}
