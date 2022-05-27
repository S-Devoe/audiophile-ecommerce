import Link from "next/link"
import { OtherProductProps } from "./OtherProduct"

function ProductLink({slug, name, image}:OtherProductProps): JSX.Element {
  return (
    <>
      <li className="product-link">
        <div className="pl_picture">
          <picture>
            <source media="(min-width: 1000px)" srcSet={image?.desktop} />
            <source media="(min-width: 768px)" srcSet={image?.tablet} />
            <source srcSet={image?.mobile} />

            {/* eslint-disable-next-line */}
            <img src={image.mobile} alt="product link" />
          </picture>
        </div>
        <h3>{name}</h3>
        <Link href={`/${slug}`}>
          <a>
            <button className="button_primary">See Product</button>
          </a>
        </Link>
      </li>
    </>
  );
}
export default ProductLink