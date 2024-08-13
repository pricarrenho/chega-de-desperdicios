import { useRouter } from "next/router";
import { getCategories } from "@/service/category/getCategories";
import Link from "next/link";
import useSWR from "swr";

export function Header() {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.asPath === pathname ? "text-black" : "";
  };

  const { data } = useSWR("/api/categories", getCategories);

  return (
    <header className="drop-shadow-lg border">
      <div className="wrapper box-border flex justify-between items-center">
        <Link href="/">
          <div>LOGO</div>
        </Link>

        <nav>
          <ul className="flex gap-3 text-lime-900 font-bold">
            {data?.map((category) => (
              <li
                key={category.id}
                className={`hover:text-black transition-colors ${isActive(
                  `/${category.slug}`
                )}`}
              >
                <Link className="block py-3 px-2" href={`/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
