import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import axios from 'axios';
import stylePD from '../../styles/ProductDetails.module.css'
import styleHeader from '../../styles/Header.module.css'
import Link from "next/link";
import {  ShoppingBag } from "lucide-react";
import InfoProduct from "./infoProduct";
import AddToCart from "./addToCart";

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
        <div>

            {/*Header*/}
            <div className={styleHeader.header}>
                    <Link className={styleHeader.title} href={'/'}>
                        <h1>Fake Store</h1>
                    </Link>
                    
                    <div className={styleHeader.divShoppingBag}>
                        <button className={styleHeader.shoppingBag}>
                            <ShoppingBag />
                        </button>
                    </div>
            </div>

            <div className={stylePD.fullscreenDiv}>
                <div className={stylePD.container}>

                    <InfoProduct product={product}/>

                    <AddToCart />

                </div>
            </div>
        </div>
    )
}

export default ProductDetails