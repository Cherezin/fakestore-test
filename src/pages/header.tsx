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
        <div>
            <h1>Product List</h1>

            <input 
            type="text" 
            placeholder="Pesquisar produtos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button onClick={() => allProducts()}>Todos</button>
            <button onClick={() => filterCategory("men's clothing")}>Men</button>
            <button onClick={() => filterCategory("women's clothing")}>Women</button>
            <button onClick={() => filterCategory("electronics")}>Electronics</button>
            <button onClick={() => filterCategory("jewelery")}>Jewelry</button>
        </div>
    )
}