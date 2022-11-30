const initialState = {
    products: [
      {
        id: 1,
        category: 'electronics',
        display: 'TV',
        normalized: 'tv',
        description: 'See all the things',
        price: 500,
        inventory: 50,
        img: 'https://images.samsung.com/is/image/samsung/levant-hdtv-n4000-global-ua43n5000arxtw-frontblack-113496207?$650_519_PNG$',
      },
      {
        id: 2,
        category: 'electronics',
        display: 'Macbook',
        normalized: 'macbook',
        description: 'Do all the things',
        price: 2300,
        inventory: 25,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635183223000',
      },
      {
        id: 3,
        category: 'food',
        display: 'Ice Cream',
        normalized: 'ice_cream',
        description: 'Flavors: Vanilla, Chocolate, Strawberry',
        price: 8,
        inventory: 150,
        img: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00077567254269/c95d66225e8bb252ca0761bd300f14b3_large.png&width=512&type=webp&quality=90',
      },
    ]
  }
  
  const productsReducer = (state=initialState, action) => {
    if(action.type === 'update_product' && action.payload.normalized) {
      const newProducts = state.products.map(product => {
        if(product.normalized !== action.payload.normalized) return product;
        else return action.payload
      });
      return {...state, products: newProducts }
    } else return state;
  }
  
  export default productsReducer;