import cart from './assets/bx-cart.svg'

const CartWidget = () => {
    return (
        <div className='Carrito'>
            <img className= 'imagenCarro' src={cart} alt="carrito"/>
            0
        </div>
    )
}

export default CartWidget