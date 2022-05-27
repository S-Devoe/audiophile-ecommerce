
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../interfaces/Product";
import { closeNav } from "../../store/NavSlice";
import ProductLists from "../body/ProductLists";
import BestGear from "../molecules/BestGear";
import Category from "../body/Category";

const CategoryTemplate: React.FC<{ products: Product[] }> = ({
  products
}): JSX.Element => {
  const { query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNav);
  }, [query, dispatch]);

  return (
    <div className="category_page">
      <div className="h1_text">
        <h1>{query.category}</h1>
      </div>
      <div className="">
        <ProductLists products={products} />
        <Category />
        <BestGear />
      </div>
    </div>
  );
};
export default CategoryTemplate;
