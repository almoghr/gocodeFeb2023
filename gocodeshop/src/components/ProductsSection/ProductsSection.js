import { Product } from "../Product/Product";
import {useState, useEffect} from 'react'
import "./ProductsSection.css"

export const ProductsSection = () => {
  const [isVeteran, setIsVeteran] = useState(false)
  const [products,setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    console.log('welcome to the world new compony')
    fetchProducts()
  },[]) 

  useEffect(() => {
    const newProduct = {title:"coat", price:"25.25",image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLPLBN2tYVRBMaU9eomNw-bvrQDZhP1NYH87bK1bzsn-BL_tsL5PrdaISbyBZAfCU3IaZ1mt5l6qWIjNhErQy87VE1g162uscqXWEv5cure3BKLZw8JjBQ3w&usqp=CAE"}
    setProducts([...products,newProduct])
  },[isVeteran])

  const onIsVeteranClick = () => {
    setIsVeteran(!isVeteran)
  }

    return (
      <section className="products">
        {products.map((p) => <Product src={p.image} title={p.title} price={p.price} isVeteran={isVeteran}/>)}
        <button onClick={onIsVeteranClick}>special prices for you!</button>
      </section>
    );
  };
  