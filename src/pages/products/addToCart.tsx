import { Package, ShieldCheck, ShoppingCart, Truck } from 'lucide-react'
import stylePD from '../../styles/ProductDetails.module.css'

export function AddToCart(){
    return (
        <div className={stylePD.addToCar}>
            <div className={stylePD.info}>

                <div className={stylePD.divForInput}>
                    <input 
                    placeholder="Digite seu CEP" 
                    type="text"
                    className={stylePD.input}
                    />
                </div>

                {/*Frete*/}
                <p className={stylePD.subTitleAddCar}><Truck />Frete Grátis para todo Brasil</p>
                
                {/*Security*/}
                <div className={stylePD.security}>
                    <span className={stylePD.subTitleAddCar}><ShieldCheck /> Segurança e privacidade</span>
                    <span className={stylePD.span}>
                    <strong>Pagamentos seguros:</strong> Nós não compartilhamos seus dados com terceiros sem sua perimisão.
                    </span>
                    <span className={stylePD.span}>
                    <strong>Dados pessoais seguros:</strong> Nós protegemos sua privacidade e mantemos suas informações pessoais seguras.
                    </span>
                </div>

                {/*Info Frete*/}
                <div className={stylePD.frete}>                       
                    <span className={stylePD.subTitleAddCar}> <Package />Entrega rápida</span>
                    <span className={stylePD.span}>Cupom de R$5,00 por entrega atrasada</span>
                    <span className={stylePD.span}>Reembolso se itens chegarem com dano</span>
                    <span className={stylePD.span}>Reembolso se o pacote for perdido</span>
                    <span className={stylePD.span}>Reembolso se não for entregue em 50 dias</span>
                </div>
                
            </div>

            <div className={stylePD.divForAddToCar}><span></span>
                <div className={stylePD.numberImput}>
                    <span>Quantidade:</span>
                    <input className={stylePD.customNumberImput} type="number" name="number" min={0}/>
                </div>
                <div className={stylePD.buyNowDivButton}>
                    <button className={stylePD.buttonBuyNow}>Compre agora</button>
                </div>
                <div className={stylePD.shoppingCartButton}>
                    <button className={stylePD.button}><ShoppingCart /> Adicione ao carrinho</button>
                </div> 
            </div>
        </div>
    )
}