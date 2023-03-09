import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Delete = (props: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await axios
      .delete(`/api/products/ ${router.query.id}`)
      .catch(() => null);

    if (!res) return null;
    return "";
  };
  handleDelete();
  return (
    <div className="container">
      <h1 className="m-5">One Item Deleted...!</h1>
    </div>
  );
};

export default Delete;
