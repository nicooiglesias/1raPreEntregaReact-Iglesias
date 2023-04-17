import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre, categoria, img, precio, stock}) => {
  return (
    <div>
        <article>
        <header>
            <h2>Nombre {nombre}</h2>
            <h2 className=""> id {id} </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} />
        </picture>
        <section>
            <p>
                $ {precio}
            </p>
            <p>
                Categoría: {categoria}
            </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)} />
        </footer>
    </article>
    </div>
  )
}

export default ItemDetail