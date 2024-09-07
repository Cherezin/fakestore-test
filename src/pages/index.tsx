import { useEffect, useState } from "react";
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import styleHome from '../styles/Home.module.css'
import styleCard from '../styles/ProductCard.module.css'
import { Eye } from "lucide-react";

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
          <div key={product.id} className={styleCard.card}>
            <Image src={product.image} alt={product.title} width={200} height={200}/>
            <h2 className={styleCard.title}>{product.title}</h2>
            <p>Preço: R${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className={styleCard.buttonDetails}>
                <Eye />
              </button>
            </Link>
            <button className={styleCard.buttonAddCar}>
              Adicionar ao carrinho
            </button>
          </div>
          
        ))}
      </div>

    </div>
  )
};

export default Home;
