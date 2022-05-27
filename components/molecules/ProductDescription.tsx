import { useState } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../interfaces/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductQuantity from "./ProductQuantity";
import { addItemToCart } from "../../store/CartSlice";

const ProductDescription = ({ product }: { product: Product }): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const notify = () =>
    toast.success(`Item ${product.name} was added to cart`, {
      position: "top-left",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity < 1)  return
      setQuantity(prev => prev - 1);
    
  };

  const addToCart = () => {
    notify();
    dispatch(
      addItemToCart({
        id: product.id,
        shortName: product.shortName,
        cartImage: product.cartImage,
        price: product.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="product-description">
      <div className="pd_text">
        <h2>
          {product.new && <strong>New Product</strong>}

          {product.name}
        </h2>

        <p>{product.description}</p>
        <p className="currency">
          {product?.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div className="pd_content">
        <div className="product_quantity">
          <ProductQuantity
            decrement={decrement}
            increment={increment}
            quantity={quantity}
          />
        </div>
        <button className="button_primary" onClick={addToCart}>
          Add to cart
        </button>
      
      </div>
    </div>
  );
};
export default ProductDescription;
