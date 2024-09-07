import { useEffect, useState } from "react";
import axios from 'axios';
import styleHome from '../styles/Home.module.css'
import ProductCard from "@/components/ProductCard";

interface Products {
  id: number,
  title: string,
  image: string,
  price: number,
  description: string,
  brand: string,
  model: string,
  color: string,
  category: string,
  discount: number
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    axios.get<Products[]>('https://fakestoreapi.com/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error('Error fetching products:', error));
  }, [])

  return (
    <div className={styleHome.container}>
      <h1>Product List</h1>

      <div className={styleHome.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
};

export default Home;
