// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const url = "http://127.0.0.1:1337/api/products/";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    try {
      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      console.log("message", error);
    }
  } else if (req.method == "POST") {
    const data = req.body.data;
    await axios
      .post(url, {
        data,
      })
      .catch(() => null);
  } else if (req.method == "DELETE") {
    const id = req.query.id;
    await axios.delete(url).catch(() => null);
    console.log(id);
    // delete data
  } else if (req.method == "PUT") {
    // update data
  }
}
