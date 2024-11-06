import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/state";
import Header from "../../components/header";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      setProductToRemove(product);
      setShowPopup(true);
    } else {
      dispatch(decreaseQuantity(product.id));
    }
  };

  const confirmRemove = () => {
    dispatch(removeFromCart(productToRemove.id));
    setShowPopup(false);
    setProductToRemove(null);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center p-6 bg-gray-100 min-h-screen mt-20">
        <div className="w-full max-w-5xl grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Shopping Bag</h2>
              <button
                onClick={() => navigate("/shop")}
                className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
              >
                Back to Products
              </button>
            </div>
            <p className="text-gray-500 mb-4">
              {cartItems.length} items in your bag.
            </p>
            <hr />

            <div class="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="bg-white border-b">
                      <td className="px-6 py-2 font-medium text-black ">
                        <div className="flex">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 rounded-lg mr-4"
                          />
                          {item.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            className="px-3 py-1 border border-gray-300 rounded-l bg-gray-700"
                            onClick={() => handleDecreaseQuantity(item)}
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            className="px-3 py-1 border border-gray-300 rounded-r  bg-gray-700"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4 text-yellow-500 font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl mb-3">Order summary</h2>
            <hr />
            <div className="text-black">
              <div className="flex justify-between my-3 ">
                <p className="text-slate-500 ">Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mt-3">
                <label htmlFor="sale " className="text-slate-500 ">
                  Enter your code
                </label>
                <input
                  type="text"
                  placeholder="code"
                  className=" w-28 bg-slate-100 rounded-md px-2 text-sm"
                />
              </div>

              <hr className="mt-3" />
              <div className="flex justify-between mt-2 px-1 py-2 bg-gray-200 border rounded-sm">
                <p className="text-lg  ">Total</p>
                <p className="text-2xl font-bold text-yellow-500 ">
                  ${totalPrice}
                </p>
              </div>
              <button className="px-5 p-4  w-full mt-2 bg-green-700 hover:bg-green-800 text-xl shadow-lg">
                BUY
              </button>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
              <h4 className="text-xl font-semibold mb-4">Remove Item?</h4>
              <p>Xóa sản phẩm</p>
              <div className="flex justify-around mt-6">
                <button
                  onClick={confirmRemove}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
