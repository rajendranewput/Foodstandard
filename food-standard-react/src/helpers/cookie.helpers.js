export const getAuthToken = () => {};

export const setAuthToken = (authAccessToken) => {};

export const removeAuthToken = () => {};

export const signIn = ({token}) => {
  setAuthToken(token);
};

export const signOut = () => {
  removeAuthToken();
};
