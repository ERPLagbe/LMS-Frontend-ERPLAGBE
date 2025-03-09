import Link from "next/link";

export default function BreadcrumbOne({ breadcrumbs }) {
  return (
    <ul className="breadcrumbs-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index} className="breadcrumbs-list-2">
          <Link className="breadcrumbs-item-2" href={breadcrumb.link}>
            {breadcrumb.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
