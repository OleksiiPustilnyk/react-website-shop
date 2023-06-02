type Product = {
    id: number
    title: string
    description: string
    capacity: string
    type: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '256',
        price: 1000,
        image: "/images/image1.webp"
    },
    {
        id: 2,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 1500,
        image: "/images/image2.webp"
    },
    {
        id: 3,
        title: 'iPhone XR',
        description: 'This is iPhone XR',
        type: 'phone',
        capacity: '128',
        price: 600,
        image: "/images/image3.webp"
    },
    {
        id: 4,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 900,
        image: "/images/image4.webp"
    },
    {
        id: 5,
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '64',
        price: 700,
        image: "/images/image5.webp"
    },
    {
        id: 6,
        title: 'iPhone XS Max',
        description: 'This is iPhone XS Max',
        type: 'phone',
        capacity: '512',
        price: 1250,
        image: "/images/image6.webp"
    },
]

export default productsArray