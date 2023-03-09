import { productType } from "@/Models";
import Link from "next/link";
import React from "react";

const ProductCard = ({ props }: any) => {
  // const ProductCard = () => {
  return (
    <div className="card m-5" style={{ width: "26rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.attributes.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.attributes.Price}
        </h6>
        <p className="card-text">{props.attributes.Description}</p>
        <Link href={"/Products/" + props.id} key={props.id}>
          <div className="card-link">Delete</div>
        </Link>
        <Link href={`/Products/updates/${props.id}`} key={props.id}>
          <div className="card-link">Update</div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
