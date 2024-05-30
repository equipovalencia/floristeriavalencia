import { Link } from "react-router-dom";
import { useCart } from "../../../context"

export const CartCard = ({ product }) => {
  const { removeFromCart, cartList } = useCart();

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
