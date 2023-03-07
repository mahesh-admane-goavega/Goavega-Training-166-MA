import Link from "next/link";
import style from "../../styles/Ninjas.module.css";
import styles from "@/styles/Home.module.css";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1 className={styles.title}>All Ninjas List</h1>

      {ninjas.map((ninja) => (
        <Link href={"/Ninjas/" + ninja.id} key={ninja.id}>
          <p className={style.single}>
            <h3>{ninja.name}</h3>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
