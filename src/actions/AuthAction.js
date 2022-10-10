import {ACTION_TYPE} from 'constants';

export const signIn = data => ({
  type: ACTION_TYPE.SIGN_IN,
  payload: {
    data: data,
  },
});

export const signOut = () => ({
  type: ACTION_TYPE.SIGN_OUT,
});
