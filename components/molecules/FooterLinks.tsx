import Link from "next/link";
import { links } from "../../utilities/links";

const FooterLinks = (): JSX.Element => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <Link href={link.url}>
            <a>{link.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default FooterLinks;
