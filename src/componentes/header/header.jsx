import '../header/header.scss'
import { Link } from 'react-router-dom';

const Header = () =>(
    <header className='header'>
        <img className='headerimg' src="https://res.cloudinary.com/teepublic/image/private/s--idFR46kg--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1603684037/production/designs/15422579_0.jpg" alt="Imagen" />
        <Link className='headeranchor' to="../pages/Remeras"><h3>Remeras</h3></Link>
        <Link className='headeranchor' href=""><h3>Busos</h3></Link>
        <Link className='headeranchor' href=""><h3>Zapatillas</h3></Link>
        <div className='headerdiv'>
            <img className='headerimg2' src="https://cdn4.vectorstock.com/i/1000x1000/24/33/realistic-empty-supermarket-shopping-cart-vector-21042433.jpg" alt="una imagen" />
            <p>1</p>
        </div>
    </header>
);

export default Header;
