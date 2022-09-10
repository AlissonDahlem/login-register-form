import Products from '../database/models/ProductModel'

export default class RegisterProduct {
  public register = async (name: string, price: number, description: string, image: string, userId: number) => {
    await Products.create({
      name,
      price,
      description,
      images: image,
      userId,
    })
  };
}