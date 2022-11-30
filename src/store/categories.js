const initialState = {
    active: 'electronics',
    categories: [
      {
        normalized: 'electronics',
        display: 'Electronics',
        description: 'So many things to choose from!',
      },
      {
        normalized: 'food',
        display: 'Food',
        description: 'Check out all the produce!',
      },
    ]
  }
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'electronics':
        state = {...state, active: action.type};
        return state;
      case 'food':
        state = {...state, active: action.type}
        return state;
      default: return state;
    }
  }
  
  export default categoriesReducer;