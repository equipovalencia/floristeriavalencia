import { Link } from "react-router-dom"

export const OrderSuccess = ({data}) => {
    return (
      <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
          <div className="my-5">
              <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
              <p>Gracias por su compra {data.user.name}!</p>
              <p>El numero de orden es: {data.id}</p>          
          </div>
          <div className="my-5">
              <p>En un momento nos comunicaremos con ud para continuar el proceso</p>
              <p>La orden esta asociada al correo {data.user.email}</p>
              <p className="my-5">Payment ID: {data.id}</p>
          </div>
          <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continuar Comprando <i className="ml-2 bi bi-cart"></i></Link>
      </section>
    )
  }
  