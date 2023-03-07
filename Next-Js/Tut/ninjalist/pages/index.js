import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
        <p className={styles.text}>
          since the 1500s, when an unknown printer took a galley of type and
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>

        <div>
          <Link href={"/Ninjas"}>
            <p className={styles.btn}>See Ninja Listing</p>
          </Link>
        </div>
      </div>
    </>
  );
}
