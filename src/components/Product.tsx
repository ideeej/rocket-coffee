import './Product.css'

export const Product = props => {
    return (
        <div className="product">
            <div className="details">
                <h3>{props.name}</h3>
                <p className="description">
                    {props.children}
                </p>
            </div>  
            <strong className="price">R${props.price}</strong>
        </div>
    )
}