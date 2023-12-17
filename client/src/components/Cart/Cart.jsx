import { useState } from "react";
import TitleSection from "../TitleSection";
import { useSelector } from "react-redux";
import WalletPayment from "./Payment/WalletBrick";
import { initMercadoPago } from "@mercadopago/sdk-react";
import AuxCard from "./Product Card/AuxCard";

// console.log(import.meta.env.VITE_PUBLIC_KEY);

const token = import.meta.env.VITE_PUBLIC_KEY;
initMercadoPago(token);

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [totalValue, setTotalValue] = useState(0);

  const handleBuyClick = () => {
    if (cart) {
      setShowPaymentMethods(true);
    } else {
      // Mostrar un mensaje o notificación indicando que no hay items en el carrito
    }
  };

  const calculateTotal = (newTotal) => {
    setTotalValue(newTotal);
  };

  return (
    <div className="font-general-sans">
      <TitleSection title={"My Cart"} onBack={"/"} />
      <div className="bg-gray-100 h-screen py-24 px-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                {cart &&
                  cart.map((product) => (
                    <AuxCard
                      key={product.id}
                      product={product}
                      calculateTotal={calculateTotal}
                    />
                  ))}
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalValue}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${totalValue + 1.99}</span>
              </div>
              {!showPaymentMethods && (
                <button
                  className="text-white font-semibold bg-black hover:bg-slate-800 py-2 px-4 rounded-lg mt-4 w-full focus:outline-none focus:ring-4 focus:ring-gray-300"
                  onClick={handleBuyClick}
                >
                  Checkout
                </button>
              )}
              {showPaymentMethods && (
                <div className="md:w-auto lg:w-auto mx-auto my-auto align-center bg-white p-4 rounded">
                  <WalletPayment />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
