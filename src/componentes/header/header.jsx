// 
import '../header/header.scss'
import { Link } from 'react-router-dom';


const Header = () =>(
    <header className='header'>
        <img className='headerimg' src="https://res.cloudinary.com/teepublic/image/private/s--idFR46kg--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1603684037/production/designs/15422579_0.jpg" alt="Imagen" />
        <nav className='headernav'>
            <ul className='headerul'>
                <li className='headerli'><Link className='headeranchor' to="/"><h3>Inicio</h3></Link></li>
                <li className='headerli'><Link className='headeranchor' to="../pages/Remeras"><h3>Remeras</h3></Link></li>
                <li className='headerli'><Link className='headeranchor' to="../pages/Busos"><h3>Busos</h3></Link></li>
                <li className='headerli'><Link className='headeranchor' to="../pages/Zapatillas"><h3>Zapatillas</h3></Link></li>
            </ul>
        </nav>
        {/* <CartWidget/> */}
    </header>
);

export default Header;



