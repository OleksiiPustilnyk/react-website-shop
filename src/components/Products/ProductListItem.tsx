import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'

import './ProductListItem.scss'
// import { count } from 'console'
import { useState } from 'react'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="image" />
                </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">{capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={() => onDecrementClick()}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField value={count} size="small" />
                    <Button
                        variant="outlined"
                        onClick={() => onIncrementClick()}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
