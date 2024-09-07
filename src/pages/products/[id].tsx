import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from 'axios';
import styleHome from '../../styles/Home.module.css'
import Image from "next/image";

interface Product {
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

const ProductDetails: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if(id){
            axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(e => console.error('Error fetching product:', e))
        }
    }, [id])

    if (!product) return <div>Loading...</div>;
    
    return (
        <div className={styleHome.container}>
            <h1>{product.title}</h1>
            <Image src={product.image} alt={product.title} width={300} height={300}/>
            <p>Preço: {product.price}</p>
            <p>Descrição: {product.description}</p>
            <p>Categoria: {product.category}</p>
        </div>
    )
}

export default ProductDetails