import React, { useState } from "react";
import producer from "immer";

const UpdatingState = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, titile: "Product-1", quantity: 1 },
      { id: 2, titile: "Product-2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    // setCart(
    //   producer((draft) => {
    //     let item = draft.items.find((item) => item.id === 1);
    //     if (item) item.quantity++;
    //   })
    // );
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <p>{cart.discount}</p>

      <div>
        {cart.items.map((e) => (
          <p key={e.id}>
            {e.id} - {e.titile} - {e.quantity}
          </p>
        ))}
      </div>
      <button className="btn btn-success" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default UpdatingState;
