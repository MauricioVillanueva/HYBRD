import { useDispatch, useSelector } from "react-redux";
import { removeItem, setQuantity } from "../../../redux/slices/cartSlice";
import { useState } from "react";

const AuxCard = ({ product, calculateTotal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const [total, setTotal] = useState(
    cartItem ? product.unit_price * cartItem.quantity : 0
  );

  const newTotal = cartItems.reduce(
    (total, item) => total + item.unit_price * item.quantity,
    0
  );
  calculateTotal(newTotal);

  const adjustQuantity = (act) => {
    if (act === "+" && cartItem) {
      dispatch(setQuantity({ id: product.id, act: "+" }));
      setTotal(product.unit_price * (cartItem.quantity + 1));
    } else if (act === "-" && cartItem && cartItem.quantity > 1) {
      dispatch(setQuantity({ id: product.id, act: "-" }));
      setTotal(product.unit_price * (cartItem.quantity - 1));
    } else {
      dispatch(removeItem(product.id));
      setTotal(0);
    }
  };

  return (
    <tbody>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <img
              className="h-16 w-16 mr-4"
              src={product.image_secure_url}
              alt="Product image"
            />
            <span className="font-semibold">{product.title}</span>
          </div>
        </td>
        <td className="py-4">$ {product.unit_price}</td>
        <td className="py-4">
          <div className="flex items-center">
            <button
              className="border rounded-md py-2 px-4 mr-2"
              onClick={() => adjustQuantity("-")}
            >
              -
            </button>
            <span className="text-center w-8">{product.quantity}</span>
            <button
              className="border rounded-md py-2 px-4 ml-2"
              onClick={() => adjustQuantity("+")}
            >
              +
            </button>
          </div>
        </td>
        <td className="py-4">$ {total}</td>
      </tr>
    </tbody>
  );
};

export default AuxCard;
