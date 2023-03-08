import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Delete = (props: Props) => {
  const router = useRouter();
  console.log(router.query.id);

  const handleDelete = async () => {
    const res = await axios
      .delete(`http://127.0.0.1:1337/api/products/ ${router.query.id}`)
      .catch(() => null);

    if (!res) return null;
    return "";
  };
  handleDelete();
  return (
    <div className="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div>
  );
};

export default Delete;
