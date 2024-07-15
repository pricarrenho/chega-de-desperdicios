import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const hoverLink =
    "hover:text-black transition duration-300 hover:ease-in p-1";

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? "text-lime-800" : "";
  };

  return (
    <header className="drop-shadow-lg border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div>LOGO</div>
        </Link>

        <nav>
          <ul className="flex gap-3 text-lime-900 font-bold">
            <li className={`${hoverLink} ${isActive("/sobre")}`}>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className={`${hoverLink} ${isActive("/receitas")}`}>
              <Link href="/receitas">Receitas</Link>
            </li>
            <li className={`${hoverLink} ${isActive("/hortas")}`}>
              <Link href="/hortas">Hortas</Link>
            </li>
            <li className={`${hoverLink} ${isActive("/adubos")}`}>
              <Link href="/adubos">Adubos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
