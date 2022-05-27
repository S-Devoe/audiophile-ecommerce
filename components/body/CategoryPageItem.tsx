import Image from "next/image"
import Link from "next/link";
import React from "react"
import { Product } from "../../interfaces/Product"

const CategoryPageItem:React.FC<Product> =  ({slug,name, description,category, new: isNew, categoryImage }) => {
  return (
    <div className="wrapper">
      <div className="category-page-item">
        <div className="cp_picture">
          <picture>
            <source
              media="(min-width: 1000px)"
              srcSet={categoryImage.desktop}
            />
            <source media="(min-width: 768px)" srcSet={categoryImage.tablet} />
            <source srcSet={categoryImage.mobile} />
            {/* eslint-disable-next-line */}
            <img src={categoryImage.mobile} alt={name} />
          </picture>
        </div>
        <div className="cp_text">
          <h2>
            {isNew && <div className="h2_text">New Product</div>}
            {name}
          </h2>
          <p>{description}</p>
          <Link href={`${category}/${slug}`}>
            <button className="button_primary">SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CategoryPageItem