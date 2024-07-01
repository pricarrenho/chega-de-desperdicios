import Link from "next/link";

export function Header() {
  const hoverLink =
    "hover:text-lime-400 transition duration-150 hover:ease-in p-1";

  return (
    <header className="bg-lime-800">
      <div className="container mx-auto py-3 flex justify-between items-center text-gray-50">
        <div>LOGO</div>

        <nav>
          <ul className="flex gap-3">
            <li className={hoverLink}>
              <Link href={"/sobre"}>Sobre</Link>
            </li>
            <li className={hoverLink}>
              <Link href={"/receitas"}>Receitas</Link>
            </li>
            <li className={hoverLink}>
              <Link href={"/hortas"}>Hortas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
