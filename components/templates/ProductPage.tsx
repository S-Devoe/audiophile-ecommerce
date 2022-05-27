import Head from "next/head"
import { Product } from "../../interfaces/Product"
import ProductDetails from "../body/ProductDetails";
import GoBack from "../molecules/GoBack";

const ProductPageTemplate: React.FC<{product: Product}> = ({product}):JSX.Element => {
  return (
    <>
      <Head>
        <title>{`Audiophile shop - ${product.name}`}</title>
      </Head>
      <main className="product-page">
        <div className="wrapper">
          <GoBack />
        </div>
        <ProductDetails product={product} />
      </main>
    </>
  );
}
export default ProductPageTemplate