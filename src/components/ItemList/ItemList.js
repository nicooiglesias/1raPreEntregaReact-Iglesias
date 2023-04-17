import Item from '../Item/Item'
import style from './ItemList.module.css'

const ItemList = ({products}) => {
  return (
    <div className={style.List}>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList