// use local storage to manage cart data
const addToDb = id => {
  let JobCart = {}
  // console.log(id);
  // localStorage.setItem('job-cart', id);


  //get the job cart from local storage
  const storedCart = localStorage.getItem('job-cart')
  if (storedCart) {
    JobCart = JSON.parse(storedCart)
  }

  // // add quantity 
  // const quantity = JobCart[id]
  // if (quantity) {
  //   const newQuantity = quantity;
  //   JobCart[id] = newQuantity
  // } else {
  //   JobCart[id] = 1
  // }
  JobCart[id] = 1
  localStorage.setItem('job-cart', JSON.stringify(JobCart))
}



const getStoredCart = () => {
  let JobCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('job-cart')
  if (storedCart) {
    JobCart = JSON.parse(storedCart)
  }
  return JobCart
}

// //Remove a specific element from local storage
// const removeFromDb = id => {
//   // get previous data from local storage.
//   const storedCart = localStorage.getItem('shopping-cart')
//   if (storedCart) {
//     const shoppingCart = JSON.parse(storedCart)
//     if (id in shoppingCart) {
//       delete shoppingCart[id]
//       localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
//     }
//   }
// }
// // Clear all data from local storage
// const deleteShoppingCart = () => {
//   localStorage.removeItem('shopping-cart')
// }

export { addToDb, getStoredCart}
