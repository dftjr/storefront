const initialState = {
    numberOfItems: 0,
    productList: [],
  }
  
  const getNewProductList = (list, product, add) => {
    let alreadyInCart = false;
    const newList = list.map(currentProduct => {
      if(product._id !== currentProduct._id) return currentProduct;
      else {
        alreadyInCart = true;
        add ? currentProduct.amountInCart++ : currentProduct.amountInCart--;
        return currentProduct;
      }
    });
  
    let filteredList = newList.filter(currentProduct => currentProduct.amountInCart > 0);
  
  
    if(alreadyInCart) return filteredList;
    else {
      product.amountInCart = 1;
      return [...filteredList, product];
    }
  }
  
  const reducer = (state=initialState, action) => {
    switch(action.type) {
      case 'add_product':
        state = {
          numberOfItems: state.numberOfItems + 1,
          productList: getNewProductList(state.productList, action.payload.product, true),
        }
        return state;
      case 'remove_product':
        state = {
          numberOfItems: state.numberOfItems - 1,
          productList: getNewProductList(state.productList, action.payload.product, false),
        }
        return state;
      default: return state;
    }
  }
  
  export default reducer;