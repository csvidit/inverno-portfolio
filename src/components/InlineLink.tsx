import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";

const InlineLink = (props: {
  href: string;
  children: React.ReactNode;
  className?: string;
  plain?: boolean;
}) => {
  return (
    <Link
      href={props.href}
      className={`group inline-flex flex-row space-x-1 items-center text-neutral-100 hover:text-neutral-300 border-b border-dashed border-neutral-100 hover:border-orange-500 transition-all duration-200 ease-in-out ${props.className}`}
    >
      {props.children}
      {!props.plain && props.href.startsWith("https") ? (
        <PiArrowUpRight className="inline ml-1 group-hover:text-orange-500 transition-all duration-200 ease-in-out" />
      ) : (
        <PiArrowRight className="inline ml-1 group-hover:text-orange-500 transition-all duration-200 ease-in-out" />
      )}
    </Link>
  );
};

export default InlineLink;
