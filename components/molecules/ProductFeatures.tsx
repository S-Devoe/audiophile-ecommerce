import { IncludedItem } from "../../interfaces/Product";

interface ProductFeaturesProps {
  features: string | undefined;
  includedItems: IncludedItem[] | undefined;
}

const ProductFeatures = ({features, includedItems}: ProductFeaturesProps): JSX.Element => {
  return (
    <div className="product-features">
      <div className="features">
        <h2>Features</h2>
        <p>
          {features}
        </p>
      </div>
      <div className="box">
        <h3>In the box</h3>
        <ul>
         {
           includedItems?.map((item) => (
             <li key={item.item}>
               <div className="item_grid">
                 <span className="item_quantity">
                  {item.quantity}x
                 </span>
                 <span className="item_content">
                   {item.item}
                 </span>
               </div>
             </li>
           ))
         }
        </ul>
      </div>
    </div>
  )
}
export default ProductFeatures