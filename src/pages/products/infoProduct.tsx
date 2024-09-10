import { GetServerSideProps } from 'next';
import Image from 'next/image';
import stylePD from '../../styles/ProductDetails.module.css';

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number;
}

const InfoProduct: React.FC<{ product: Product | null }> = ({ product }) => {
    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div className={stylePD.divMother}>
            <h1>{product.title}</h1>
            
            <div className={stylePD.frameMother}>
                <div className={stylePD.frame}>
                    <div>
                        <Image src={product.image} alt={product.title} width={300} height={300} />
                    </div>
                    <div>
                        <p><strong>Descrição:</strong> {product.description}</p>
                        <p><strong>Categoria:</strong> {product.category}</p>
                        <p><strong>Preço:</strong> R${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    try {
        const res = await fetch(`https://api.example.com/products/${id}`);
        const data = await res.json();

        if (!data || !data.title) {
            return {
                props: {
                    product: null,
                },
            };
        }

        return {
            props: {
                product: data,
            },
        };
    } catch (error) {
        console.error('Erro ao buscar o produto:', error);
        return {
            props: {
                product: null,
            },
        };
    }
};

export default InfoProduct;
