import { Link } from "react-router-dom";
import { useCart } from "../../../context"
import { useRef } from "react";

export const CartCard = ({ product }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity, cartList } = useCart();
  const number = useRef(product.order_quantity);

  console.log(typeof (number.current.value))

  function handleClick(product) {
    removeFromCart(product);
  }

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Link to={`/products/${product.id}`}>
            <img className="w-12 h-12 rounded" src={product.poster} alt="Product" />
          </Link>
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <Link to={`/products/${product.id}`}>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {product.name}
            </p>
          </Link>
        </div>

        <div className="flex items-center">

          <div>
            <input onChange={() =>
              product.order_quantity > number.current ? decreaseQuantity(product, number.current) : increaseQuantity(product, number.current)}
              ref={number} type="number" id="number" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bordeproductr-blue-500" placeholder={product.order_quantity} required />
          </div>

        </div>
        {console.log({ cartList })}
        <button onClick={() => handleClick(product)} className="text-sm font-medium text-red-400 truncate mx-4">Remove</button>

        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${product.price}
        </div>
      </div>
    </li>
  )
}
