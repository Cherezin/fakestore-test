import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from 'axios'

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
    const router = useRouter();;
    const { id } = router.query;;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if(id){
            axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(e => console.error('Error fetching product:', e))
        }
    }, [id])
}