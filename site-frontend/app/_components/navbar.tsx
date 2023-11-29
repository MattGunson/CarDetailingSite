import Link from "next/link";
import AccountButton from "./accountButton";

export default function Navbar() {
  interface page {
    name: string;
    link: string;
  }

  const pages: page[] = [
    { name: "Profile", link: "/dashboard" },
    { name: "Products", link: "/products" },
    { name: "Schedule", link: "/schedule" },
  ];

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          CarDetail
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <AccountButton />
          {pages.map((page) => (
            <li key={page.name} className="text-primary-content">
              <Link key={page.name} href={page.link}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
