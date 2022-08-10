import { useState } from 'react'
import './Product.css'

export const Product = props => {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className="product">
            <div className="details">
                <h3>{!props.setTotal? "" : `${quantity}x`} {props.name}</h3>
                <p className="description">
                    {props.children}
                </p>
                <button style={{display: !props.setTotal ? 'none' : 'inline' }} onClick={
                    () => {
                        setQuantity((quantity) => quantity + 1)
                        props.setTotal((total) => total+props.price)
                    }
                } className="adicionar">+</button>
                <button style={{display: !props.setTotal ? 'none' : 'inline' }} onClick={
                    () => {
                        if (quantity <= 0){return}

                        setQuantity((quantity) => quantity - 1)
                        props.setTotal((total) => total-props.price)
                    }
                } className="adicionar">-</button>
            </div>
            <strong className="price">
                R${props.price.toFixed(2)>0?props.price.toFixed(2):0}
            </strong>
        </div>
    )
}