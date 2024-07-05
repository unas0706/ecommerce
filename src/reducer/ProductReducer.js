const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featuredData = action.payload.filter((ele) => {
        return ele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        SingleProduct: action.payload,
      };
    case "SINGLE_API_ERROR":
      return {
        ...state,
        SINGLE_API_ERROR: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
