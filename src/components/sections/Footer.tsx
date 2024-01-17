import InlineLink from "../InlineLink";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <p>
        A website template made by <InlineLink href="https://viditkhandelwal.com">Vidit Khandelwal</InlineLink>. For more templates and UI
        components like this, go to <InlineLink href="https://snippetopia.xyz">Snippetopia</InlineLink>.
      </p>
    </div>
  );
};

export default Footer;