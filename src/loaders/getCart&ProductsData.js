import { getStoredCart } from '../utils/fakeDB'


export const productsAndCartData = async () => {
  const productsData = await fetch('jobLists.json')
  const products = await productsData.json()

  return { products }
  // return { products, cart }
}
// export default productsAndCartData
