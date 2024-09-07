import { useEffect, useState } from "react";
import axios from 'axios';
import styleHome from '../styles/Home.module.css'
import ProductCard from "@/components/ProductCard";
import { Header } from "./header";

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
  const [searchTerm, setSearchTerm] = useState('')
  const [isFilteredProducts, setIsFilteredProducts] = useState<Products[]>(products)

  useEffect(() => {
    axios.get<Products[]>('https://fakestoreapi.com/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error('Error fetching products:', error));
  }, [])

  useEffect(() => {
    const searchResults = products.filter(product => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

    setIsFilteredProducts(searchResults)
  }, [searchTerm, products])

  function filterCategory(category: string){
    const filtered = products.filter( product => 
       product.category.toLowerCase() === category.toLowerCase()
    );

    setIsFilteredProducts(filtered);
    setSearchTerm('');
  }

  function allProducts(){
    setIsFilteredProducts(products)
  }

  return (
    <div className={styleHome.container}>
      
      <Header
      allProducts={allProducts}
      filterCategory={filterCategory}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      />
      
      <div className={styleHome.grid}>
        {isFilteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
};

export default Home;
