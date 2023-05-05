import '../header/header.scss'

const Header = () =>(
    <header className='header'>
        <div className='headerdiv'>
            <img className='headerimg' src="https://res.cloudinary.com/teepublic/image/private/s--idFR46kg--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1603684037/production/designs/15422579_0.jpg" alt="Imagen" />
        </div>
        <div className='headerdiv'>
            <nav className='headernav'>
                <ul className='headerul'>
                    <li className='headerulli'><a href=""><h3>Remeras</h3></a></li>
                    <li className='headerulli'><a href=""><h3>Busos</h3></a></li>
                    <li className='headerulli'><a href=""><h3>Zapatillas</h3></a></li>
                </ul>
                <div className='headerdivhijo'>
                    <img className='headerdivhijocarrito' src="https://cdn4.vectorstock.com/i/1000x1000/24/33/realistic-empty-supermarket-shopping-cart-vector-21042433.jpg" alt="una imagen" />
                    <p>1</p>
                </div>
            </nav>
        </div>
    </header>
);

export default Header;