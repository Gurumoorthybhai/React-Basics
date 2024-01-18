const products = [
    { productName: 'Real Me 1', prodId: 'Mobile1', category: 'Mobile' },
    { productName: 'Real Me 2', prodId: 'Mobile2', category: 'Mobile' },
    { productName: 'Real Me 3', prodId: 'Mobile3', category: 'Mobile' }
]
function Rendering() {
    return (
        <div>
            {
                products.map(product => (
                    <ul key={product?.prodId}>
                        <li>{product.productName}</li>
                    </ul>
                )
                )
            }
        </div>
    )
}

export default Rendering;