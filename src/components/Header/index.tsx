import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCategories } from "@/service/category/getCategories";
import { Categories } from "@/types/global";
import Link from "next/link";

export function Header() {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? "text-black" : "";
  };

  const [categories, setCategories] = useState<Categories[]>();

  useEffect(() => {
    getCategories().then((result) => {
      if (result) {
        setCategories(result as any);
      }
    });
  }, []);

  return (
    <header className="drop-shadow-lg border">
      <div className="wrapper box-border py-3 flex justify-between items-center">
        <Link href="/">
          <div>LOGO</div>
        </Link>

        <nav>
          <ul className="flex gap-3 text-lime-900 font-bold">
            {categories?.map((category) => (
              <li
                key={category.id}
                className={`hover:text-black transition-colors ${isActive(
                  `/${category.slug}`
                )}`}
              >
                <Link href={`/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
