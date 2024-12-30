import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

// Rename the component to avoid the naming conflict
const CartTotals = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full justify-end sm:w-[450px]">{/* Removed recursive CartTotal */}</div>
      </div>
    </div>
  );
};

export default CartTotals;
