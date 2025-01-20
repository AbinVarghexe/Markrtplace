"use client";

import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Client } from "@/lib/sanity";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { useEffect, useState } from "react";


async function getProducts() {
  const res = `
    *[_type == "product"][0...4]{
      _id,
      description,
      price,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": image[0].asset->url
    }`;

  try {
    const data = await Client.fetch(res);
    console.log("Products fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export const newArrivalsData: Promise<Product[]> = getProducts();

export const topSellingData: Product[] = [
  // {
  //   _id: 5,
  //   title: "Vertical Striped Shirt",
  //   srcUrl: "/images/pic5.png",
  //   gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
  //   price: 232,
  //   discount: {
  //     amount: 0,
  //     percentage: 20,
  //   },
  //   rating: 5.0,
  // },
];

export const relatedProductData: Product[] = [
  // {
  //   id: 12,
  //   title: "Polo with Contrast Trims",
  //   srcUrl: "/images/pic12.png",
  //   gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
  //   price: 242,
  //   discount: {
  //     amount: 0,
  //     percentage: 20,
  //   },
  //   rating: 4.0,
  // },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
];

export default function Home() {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await newArrivalsData;
      setNewArrivals(products);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          name="NEW ARRIVALS"
          data={newArrivals}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            name="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
