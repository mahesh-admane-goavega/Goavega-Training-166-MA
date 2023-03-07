import styles from "@/styles/Home.module.css";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1 className={styles.title}>Details Page</h1>
      <h3>
        {ninja.id}. {ninja.name}
      </h3>
      <p>{ninja.username}</p>
      <p>{ninja.email}</p>
      <p>{ninja.address.street}</p>
    </div>
  );
};

export default Details;
