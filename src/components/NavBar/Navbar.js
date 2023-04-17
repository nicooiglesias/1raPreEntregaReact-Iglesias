import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="">
      <div>
        <Link to='/'>
          <h1>Rage</h1>
        </Link>
      </div>
      <div className="">
        <NavLink to={`/categoria/Remeras`} className=''>Remeras</NavLink>
        <NavLink to={`/categoria/Zapatillas`} className=''>Zapatillas</NavLink>
        <NavLink to={`/categoria/Bermudas`} className=''>Bermudas</NavLink>
        <NavLink to={`/categoria/Jeans`} className=''>Jeans</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;