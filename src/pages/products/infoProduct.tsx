import Image from "next/image";
import stylePD from '../../styles/ProductDetails.module.css'

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

const InfoProduct: React.FC<{product: Product}> = ( {product} ) => {
    return(
        <div className={stylePD.divMother}>
            <h1>{product.title}</h1>
            
            <div className={stylePD.frameMother}>
                <div className={stylePD.frame}>
                    <div>
                        <Image src={product.image} alt={product.title} width={300} height={300}/>
                    </div>
                    <div>
                        <p><strong>Descrição:</strong> {product.description}</p>
                        <p><strong>Categoria:</strong> {product.category}</p>
                        <p><strong>Preço:</strong> R${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct;