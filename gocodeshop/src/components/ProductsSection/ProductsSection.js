import { Product } from "../Product/Product";
import {useContext} from 'react'
import "./ProductsSection.css"
import { MyContext } from "../../MyContext";

export const ProductsSection = () => {
  const {currentProducts} = useContext(MyContext)
  // const [isVeteran, setIsVeteran] = useState(false)
  // useEffect(() => {
  //   const newProduct = {title:"coat", price:"25.25",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE"}
  //   setProducts([...products,newProduct])
  // },[isVeteran])

  // const onIsVeteranClick = () => {
  //   setIsVeteran(!isVeteran)
  // }

    return (
      <section className="products">
        {currentProducts.map((p) => <Product src={p.image} title={p.title} price={p.price} id={p.id}/>)}
        {/* <button onClick={onIsVeteranClick}>special prices for you!</button> */}
      </section>
    );
  };
  