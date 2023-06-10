import "./itemdetailcontainer.scss"
import productos from "../../data/productos"

function itemdetailcontainer({}) {
  return (
    <div className="itemdetailcontainer">{productos.map( (itemindetail) => (
        <div>
            <section>
                <div>
                    <img src={itemindetail.img} alt="imagen" />
                    <h4>{itemindetail.precio}</h4>
                </div>
            </section>
            <section>
                <div>
                    <h3>{itemindetail.categoria}</h3>
                    <h2>{itemindetail.title}</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia provident earum distinctio est culpa. Delectus beatae eum nihil officia temporibus, accusantium, eius, accusamus quas ullam quam doloribus exercitationem vero repudiandae.</p>
                </div>
            </section>    
        </div>
    ) )}

    </div>
  )
}

export default itemdetailcontainer