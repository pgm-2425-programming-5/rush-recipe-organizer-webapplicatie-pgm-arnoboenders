import Link from "next/link";

export default function Button({
  children,
  href,
  className,
  type = "button",
}: Readonly<{
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}>) {
  return href ? (
    <Link
      href={href}
      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}

