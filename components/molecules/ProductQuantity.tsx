const ProductQuantity = ({
  decrement,
  increment,
  quantity,
}: {
  decrement: () => void;
  increment: () => void;
  quantity: number;
}) => {

  
  return(
    <div className="product_quantity_button">
      <button onClick={() => decrement()}>
        -
      </button>
      <strong>
        {quantity}
      </strong>
      <button onClick={() => increment()}>
        +
      </button>

    </div>
  )
};
export default ProductQuantity;
