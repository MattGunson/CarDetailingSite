import Link from "next/link";

export default function Navbar() {
  interface page {
    name: string;
    link: string;
  }

  const pages: page[] = [
    { name: "Profile", link: "/profile" },
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

// {/* <li>
//             <a>Link</a>
//           </li>
//           <li>
//             <details>
//               <summary>Parent</summary>
//               <ul className="p-2 bg-base-100">
//                 <li>
//                   <a>Link 1</a>
//                 </li>
//                 <li>
//                   <a>Link 2</a>
//                 </li>
//               </ul>
//             </details>
//           </li> */}
