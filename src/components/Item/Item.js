import { Link } from "react-router-dom"
const Item = ({id, nombre, img, precio, stock}) => {

    return (
      <article className="">
          <header>
              <h2 className="">{nombre}</h2>
          
          </header>
          <picture>
              <img className="" src={img} alt={nombre} />
          </picture>
          <section>
              <p className="">${precio}</p>
              <p className="">Stock disponible: { stock }</p>
          </section>
          <footer>
              <Link to={`/item/${id}`} className="">Ver detalle</Link>
          </footer>
      </article>
    )
  }
  
  export default Item