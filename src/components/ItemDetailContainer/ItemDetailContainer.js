import { useState, useEffect } from 'react'
import { getProductsById } from '../../services/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
   
    const [products, setProducts] = useState(null)

    const { productId } = useParams()


    useEffect(() => {
        getProductsById(productId)
            .then(response => {
                console.log(response)
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [productId])


  return (
    <div>
        <ItemDetail {...products} />
    </div>
  )
}

export default ItemDetailContainer