import { Link } from "react-router-dom"
import style from './Item.module.css';
const Item = ({id, nombre, img, precio, stock}) => {

    return (
    <div className={style.card}>
      <article className={style.CardItem}>
          <header className={style.Header}>
              <h2 className={style.ItemHeader}>{nombre}</h2>
          
          </header>
          <picture className={style.ItemImg}>
              <img  className={style.img} src={img} alt={nombre} />
          </picture>
          <section>
              <p className={style.Info}>${precio}</p>
              <p className={style.Info}>Stock disponible: { stock }</p>
          </section>
          <footer className={style.ItemFooter}>
              <Link to={`/item/${id}`} className={style.ButtonDetail}>Ver detalle</Link>
          </footer>
      </article>
      </div>
    )
  }
  
  export default Item