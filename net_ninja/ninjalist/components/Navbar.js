import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Navbar Component</h1>
        {/* <img src="/download.png" alt="" /> */}
        <Image
          width={128}
          height={77}
          src="/download.png"
          className="imagefor"
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ozkan">
        <a>Pages-Ozkan</a>
      </Link>
    </nav>
  );
};

export default Navbar;
