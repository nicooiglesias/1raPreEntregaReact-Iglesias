import CartWidget from '../CartWidget/CartWidget';
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={style.NavBar}>
      <Link to='/'>
          <h1>Rage</h1>
        </Link>
      <div className={style.Categories}>
        
        <NavLink to={`/categoria/Remeras`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
        <NavLink to={`/categoria/Bermudas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bermudas</NavLink> 
        <NavLink to={`/categoria/Zapatillas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
        <NavLink to={`/categoria/Jeans`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Jeans</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;