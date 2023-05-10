import { CommonActions } from "../actions/types";

const initialState = {
  isError: false,
  errorMessage: "",
  isSuccess: false,
  successMessage: "",
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CommonActions.SAVE_ERROR_MESSAGE: {
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
      };
    }
    case CommonActions.SAVE_SUCCESS_MESSAGE: {
      return {
        ...state,
        isSuccess: action.payload.isSuccess,
        successMessage: action.payload.successMessage,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default commonReducer;
