import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h3>Something Went Wrong...!</h3>
      <p>Can not found your page</p>
      <Link href={"/"}>
        <p>Go back to Home Page</p>
      </Link>
    </div>
  );
};

export default NotFound;
