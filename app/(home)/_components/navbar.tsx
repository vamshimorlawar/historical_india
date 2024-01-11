import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex justify-between p-4 bg-orange-500 text-neutral-800 w-full">
      <div className="flex gap-4">
        <Link href="/create-article">Create Article</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/sign-up">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
