import { Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styleCard from '../styles/ProductCard.module.css'

interface Products {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
}

const ProductCard: React.FC<{ product: Products }> = ({ product }) => {
    return(
        <div key={product.id}>
            
            <Image src={product.image} alt={product.title} width={150} height={150}/>
            <h2 className={styleCard.title}>{product.title}</h2>
            <p>Preço: R${product.price}</p>

            <Link href={`/products/${product.id}`}>
                <button className={styleCard.buttonDetails}>
                <Eye />
                </button>
            </Link>

            <button className={styleCard.buttonAddCar}>
                <ShoppingCart />
            </button>

        </div>
    )
}

export default ProductCard;