import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="title">
        <Link href={"/"}>
          <Image width={128} height={77} src="/logo.png" />
        </Link>
      </div>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/About">
        <p>About</p>
      </Link>
      <Link href="/Ninjas">
        <p>Ninja List</p>
      </Link>
    </nav>
  );
};

export default Navbar;
