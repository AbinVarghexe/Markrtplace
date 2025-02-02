"use client"

import {
  newArrivalsData,
  relatedProductData,
  topSellingData,
} from "@/app/page";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { Product } from "@/types/product.types";
import { notFound } from "next/navigation";
let data: Product[] = [];

async function fetchData() {
  const newArrivals = await newArrivalsData;



  data = [
    ...newArrivals,
    ...topSellingData,
    ...relatedProductData,
  ];
  console.log("Product data fetched successfully:", data);
}

fetchData();

export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productData = data.find(
    (product) => product._id === Number(params.slug[0])
  );

  if (!productData?.name) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.name ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec name="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
}
