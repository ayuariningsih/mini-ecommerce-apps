export interface Product {
  id: string
  images: Array<Image>
  name: string
  price: string
  rating: number
  badge: string
}

export type Image = {
  url: string
  id: string
}
