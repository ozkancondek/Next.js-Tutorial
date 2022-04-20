import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Navbar Component</h1>
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
