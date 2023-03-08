import ProductCard from "@/Components/ProductCard";
import { productType } from "@/Models";
import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";

interface Props {
  products: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://127.0.0.1:1337/api/products");
  const products: any = await res.json();
  console.log("here res", products);
  return {
    props: {
      products,
    },
  };
};

// type Props = {
//   authData: any;
// };

// export const getStaticProps = async () => {
//   const resp = await fetch("http://localhost:1337/api/products");
//   const mydata = await resp.json();
//   return {
//     props: { authData: mydata },
//   };
// };

const Products = ({ products }: any) => {
  console.log("This is product", products.data);
  return (
    <div>
      {products.data.map((item: any) => (
        <ProductCard props={item} />
      ))}
    </div>
  );
};

export default Products;
