import { CommonActions } from "./types";

export const setErrorMessage = (error) => {
  return async (dispatch) => {
    let errorMessage = error?.response?.data?.message || error?.message;

    if (
      Array.isArray(error?.response?.data?.errors) &&
      error?.response?.data?.errors.length > 0
    ) {
      errorMessage = error?.response?.data?.errors.map((error) => {
        if (error?.field) {
          return `- ${error.field} ${error.defaultMessage}\n`;
        } else {
          return `- ${error}\n`;
        }
      });
    }

    dispatch(saveErrorMessage({ errorMessage, isError: true }));
  };
};

export const saveErrorMessage = ({ errorMessage, isError }) => ({
  type: CommonActions.SAVE_ERROR_MESSAGE,
  payload: {
    isError,
    errorMessage,
  },
});

export const saveSuccessMessage = ({ successMessage, isSuccess }) => ({
  type: CommonActions.SAVE_SUCCESS_MESSAGE,
  payload: {
    isSuccess,
    successMessage,
  },
});
