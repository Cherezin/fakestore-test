import { useEffect, useState } from "react";
import axios from 'axios';

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
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
