const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filterProducts: [...action.payload],
        AllProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProducts, sorting } = state;
      let tempSortProduct = [...filterProducts];

      const sortingProducts = (a, b) => {
        if (sorting === "lowest") {
          console.log(12);
          return a.price - b.price;
        }

        if (sorting === "highest") {
          return b.price - a.price;
        }

        if (sorting === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      console.log(state.filters);
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      var { AllProducts } = state;
      var tempFilterProducts = [...AllProducts];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.colors.includes(color);
        });
      }
      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filterProducts: tempFilterProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterReducer;
