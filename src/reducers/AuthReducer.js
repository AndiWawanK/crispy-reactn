import {ACTION_TYPE} from 'constants';

const initialState = {
  userToken: null,
  data: undefined,
};

export default (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ACTION_TYPE.SIGN_IN:
      newState.userToken = action.payload.data;
      return newState;
    case ACTION_TYPE.SIGN_OUT:
      newState.userToken = null;
      return newState;
    case ACTION_TYPE.USER_PROFILE:
      newState.data = action.payload.data;
      return newState;
    default:
      return state;
  }
};
