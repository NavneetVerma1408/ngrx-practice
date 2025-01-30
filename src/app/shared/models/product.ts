export class Product {
    product_id: number = 0
    name: string = ''
    description: string = ''
    price: number = 0
    unit: string = ''
    image: string = ''
    discount: number = 0
    availability: boolean = true
    quantity:number=0
    brand: string = ''
    category: string = ''
    rating: number = 0
    reviews: Review[] = []
}

export class Review {
    user_id: number = 0
    rating: number = 0
    comment: string = ''
}
