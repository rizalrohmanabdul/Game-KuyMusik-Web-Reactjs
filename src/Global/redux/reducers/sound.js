const initialState = {
    soundList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const sound = (state = initialState, action) => {
    switch (action.type) {
      case "GET_SOUND_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_SOUND_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "GET_SOUND_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          soundList: action.payload.data
        };
        case "GET_SOUND_NOW_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_SOUND_NOW_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "GET_SOUND_NOW_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          soundList: action.payload.data
        };
        case "INSERT_SOUND_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "INSERT_SOUND_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "INSERT_SOUND_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          soundList: action.payload.data
        };
        case "UPDATE_SOUND_NOW_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "UPDATE_SOUND_NOW_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "UPDATE_SOUND_NOW_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          soundList: action.payload.data
        };
        case "UPDATE_SOUND_OLD_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "UPDATE_SOUND_OLD_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "UPDATE_SOUND_OLD_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          soundList: action.payload.data
        };
      default:
        return state;
    }
  };
  
  export default sound;
  