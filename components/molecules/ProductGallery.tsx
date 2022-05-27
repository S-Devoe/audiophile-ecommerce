import Image from "next/image";
import { CategoryImage } from "../../interfaces/Product";

interface ProductGaleryProps {
  first?: CategoryImage | undefined;
  second?: CategoryImage | undefined;
  third?: CategoryImage | undefined;
}

const ProductGallery = ({first, second, third}: ProductGaleryProps): JSX.Element => {
  return (
    <div className="product-gallery">
      <div className="pg_picture_1">
        <picture>
          <source media="(min-width: 1000px)" srcSet={first?.desktop} />
          <source media="(min-width: 768px)" srcSet={first?.tablet} />
          <source srcSet={first?.mobile} />
          {/* eslint-disable-next-line */}
          <img src={first?.mobile} alt="photo gallery" />
        </picture>
        </div>
        <div className="pg_picture_2">
        <picture>
          <source media="(min-width: 1000px)" srcSet={second?.desktop} />
          <source media="(min-width: 768px)" srcSet={second?.tablet} />
          <source srcSet={second?.mobile} />
          {/* eslint-disable-next-line */}
          <img src={second?.mobile} alt="photo gallery" />
        </picture>
        </div>
        <div className="pg_picture_3">
        <picture>
          <source media="(min-width: 1000px)" srcSet={third?.desktop} />
          <source media="(min-width: 768px)" srcSet={third?.tablet} />
          <source srcSet={third?.mobile} />
          {/* eslint-disable-next-line */}
          <img src={third?.mobile} alt="photo gallery" />
        </picture>
      </div>
    </div>
  );
}
export default ProductGallery