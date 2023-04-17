import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../services/asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    
    console.log(products)

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            
            .catch(error => {
                console.error(error)
            })
            
    }, [categoryId]
    )

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList  products={products} />
        </div>
    )
}


export default ItemListContainer;