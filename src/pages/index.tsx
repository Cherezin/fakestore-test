import { useEffect, useState } from "react";
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";

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
    <div>
      <h1>Product List</h1>
    <div>
      {products.map(product => (
        <div key={product.id}>
          <Image src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Preço: R${product.price}</p>
          <Link href={`/products/${product.id}`}>Ver Detalhes</Link>
        </div>
        
      ))}
    </div>
    </div>
  )
};

export default Home;
