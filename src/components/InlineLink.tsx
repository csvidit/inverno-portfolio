import Link from "next/link";

const InlineLink = (props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={props.href}>
      <a
        className={`text-neutral-100 hover:text-neutral-200 transition-all duration-200 ease-in-out ${props.className}`}
      >
        {props.children}
      </a>
    </Link>
  );
};
