// import store from '../../store';
// import {redirectToLogin} from '../../store/shared/User/UserAction';
// import {logToDataDog} from '../../utils/Logger';
// import {dispatchToasterError} from '../../utils/Shared';
// import Auth from './../../utils/Auth';

// export const isHandlerEnabled = (config = {}) => {
//   return !(
//     Object.prototype.hasOwnProperty.call(config, 'handlerEnabled') && !config.handlerEnabled
//   );
// };

// export const requestHandler = (request) => {
//   if (isHandlerEnabled(request)) {
//     const authToken = Auth.getToken()?.authToken;
//     const language = Auth.getLanguage();
//     if (request.params?.noAuth) {
//       request.params = {};
//       return request;
//     }
//     if (authToken) {
//       request.headers.Authorization = `Bearer ${authToken}`;
//     }

//     if (language && !request.params?.noLang) {
//       request.headers['Accept-Language'] = language;
//     }
//   }
//   return request;
// };

export const successHandler = (response) => {
 // if (isHandlerEnabled(response.config)) {
    const {responseType = 'json'} = response.config || {};
    if (responseType === 'blob') {
      return {file: response.data, headers: response.headers};
    }
  //}
  return response.data;
};

// export const errorHandler = (error) => {
//   if (isHandlerEnabled(error.config)) {
//     const {response} = error;
//     logToDataDog([JSON.stringify(response.data), response.request.responseURL]);
//     if (response?.status === 401) {
//       dispatchToasterError({defaultMsg: response.data.message});
//       if (Auth.isAuth) {
//         Auth.signOut();
//         store.dispatch(redirectToLogin());
//       }
//     }
//   }
//   return Promise.reject({...error});
// };
