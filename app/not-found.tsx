import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 min-h-screen">
      <div className="text-6xl font-bold">404</div>

      <div>
        Click here to go{" "}
        <Link href="/" className="text-blue-400 underline">
          Home
        </Link>
      </div>
    </div>
  );
}
