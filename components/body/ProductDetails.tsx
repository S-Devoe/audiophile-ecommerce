import { Product } from "../../interfaces/Product"
import BestGear from "../molecules/BestGear";
import OtherProduct from "../molecules/OtherProduct";
import ProductDescription from "../molecules/ProductDescription";
import ProductFeatures from "../molecules/ProductFeatures";
import ProductGallery from "../molecules/ProductGallery";
import Category from "./Category";

const ProductDetails: React.FC<{product: Product}> = ({product}): JSX.Element => {
    // console.log(product.image)
  return (
    <>
      <div className="wrapper">
        <div className="product-details">
          <div className="pd-picture">
            <picture>
              <source
                media="(min-width: 1000px)"
                srcSet={product?.image?.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={product?.image?.tablet}
              />
              <source srcSet={product?.image?.mobile} />

              {/* eslint-disable-next-line */}
              <img src={product?.image?.mobile} alt="product image" />
            </picture>
          </div>
          <ProductDescription product={product} />
        </div>
        <ProductFeatures
          features={product.features}
          includedItems={product.includedItems}
        />
        <ProductGallery {...product?.gallery} />
        <OtherProduct other={product.others} />
      </div>
      <Category />
      <BestGear />
    </>
  );
}
export default ProductDetails