import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="flex space-x-6 justify-center">
          <Link href={"/blog"} className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          <Link href={"/about"} className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href={"/blog/post"} className="text-gray-300 hover:text-white transition-colors">Post</Link>
          <Link href={"/playground/find-play"} className="text-gray-300 hover:text-white transition-colors">Playground</Link>
          <Link href={"/users-client-ver"} className="text-gray-300 hover:text-white transition-colors">Users-Client</Link>
          <Link href={"/users-server-ver"} className="text-gray-300 hover:text-white transition-colors">Users-Server</Link>
          <Link href={"/products-server-version"} className="text-gray-300 hover:text-white transition-colors">Products-Server</Link>
          <Link href={"/products-client-version"} className="text-gray-300 hover:text-white transition-colors">Products-Client</Link>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
