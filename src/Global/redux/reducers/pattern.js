const initialState = {
    patternList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const pattern = (state = initialState, action) => {
    switch (action.type) {
      case "PATTERN_ALL_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "PATTERN_ALL_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "PATTERN_ALL_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          patternList: action.payload.data
        };
        case "INSERT_PATTERN_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "INSERT_PATTERN_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "INSERT_PATTERN_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          patternList: action.payload.data
        };
        case "ACTIVE_PATTERN_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "ACTIVE_PATTERN_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "ACTIVE_PATTERN_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          patternList: action.payload.data
        };
      default:
        return state;
    }
  };
  
  export default pattern;
  