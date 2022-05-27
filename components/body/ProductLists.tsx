import { Product } from "../../interfaces/Product"
import CategoryPageItem from "./CategoryPageItem"


const ProductLists: React.FC<{ products: Product[] }> = ({
  products,
}): JSX.Element => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <CategoryPageItem key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ProductLists