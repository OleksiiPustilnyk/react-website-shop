type Product = {
    title: string
    description: string
    capacity: string
    type: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 1500,
    },
    {
        title: 'iPhone XR',
        description: 'This is iPhone XR',
        type: 'phone',
        capacity: '128',
        price: 600,
    },
    {
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 900,
    },
    {
        title: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: '64',
        price: 700,
    },
    {
        title: 'iPhone XS Max',
        description: 'This is iPhone XS Max',
        type: 'phone',
        capacity: '512',
        price: 1250,
    },
]

export default productsArray