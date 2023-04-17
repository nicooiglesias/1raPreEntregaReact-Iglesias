import ItemCount from "../ItemCount/ItemCount"
import style from './itemDetail.module.css'
const ItemDetail = ({id,nombre, categoria, img, precio, stock}) => {
  return (
    <div className={style.card}>
        <article className={style.CardItem}>
        <header className={style.Header}>
            <h2 className={style.ItemHeader}> {nombre}</h2>
        </header>
        <picture className={style.pic}>
            <img src={img} alt={nombre} className={style.ItemImg}/>
        </picture>
        <section>
            <p className={style.Info}>
                $ {precio}
            </p>
            <p className={style.Info}>
                Categoría: {categoria}
            </p>
        </section>
        <footer className={style.ItemFooter}>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)} />
        </footer>
    </article>
    </div>
  )
}

export default ItemDetail