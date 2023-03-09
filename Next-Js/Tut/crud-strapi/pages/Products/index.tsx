import ProductCard from "@/Components/ProductCard";
import { productType } from "@/Models";
import { GetServerSideProps, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {products.map((item: any) => (
        <ProductCard props={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
