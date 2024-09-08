import { LayoutGrid } from 'lucide-react'
import style from '../styles/Header.module.css'

interface HeaderProps {
    searchTerm: string
    setSearchTerm: (e: string) => void
    allProducts: () => void
    filterCategory: (category: string) => void
}

export function Header( {
    searchTerm,
    setSearchTerm,
    allProducts,
    filterCategory,
} : HeaderProps){
    return(
        <div className={style.header}>
            <h1>Fake Store</h1>

            <div className={style.divForInputAndButton}>
                <div className={style.divForInput}>
                    <input 
                    type="text" 
                    placeholder="Pesquisar produtos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={style.input}
                    />
                </div>

                <div className={style.buttonContainer}>
                    <button className={style.buttonHeaderAll} onClick={() => allProducts()}>
                        <LayoutGrid />
                    </button>
                    <button className={style.buttonHeader} onClick={() => filterCategory("men's clothing")}>Men</button>
                    <button className={style.buttonHeader} onClick={() => filterCategory("women's clothing")}>Women</button>
                    <button className={style.buttonHeader} onClick={() => filterCategory("electronics")}>Electronics</button>
                    <button className={style.buttonHeader} onClick={() => filterCategory("jewelery")}>Jewelry</button>
                </div>
                
            </div>
        </div>
    )
}