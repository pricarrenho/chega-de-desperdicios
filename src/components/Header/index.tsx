import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const hoverLink =
    "hover:text-lime-400 transition duration-150 hover:ease-in p-1";

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? "text-lime-400" : "";
  };

  return (
    <header className="bg-lime-800">
      <div className="container mx-auto py-3 flex justify-between items-center text-gray-50">
        <Link href="/">
          <div>LOGO</div>
        </Link>

        <nav>
          <ul className="flex gap-3">
            <li className={`${hoverLink} ${isActive("/sobre")}`}>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className={`${hoverLink} ${isActive("/receitas")}`}>
              <Link href="/receitas">Receitas</Link>
            </li>
            <li className={`${hoverLink} ${isActive("/hortas")}`}>
              <Link href="/hortas">Hortas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
