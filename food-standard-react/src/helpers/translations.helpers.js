import i18n from 'i18next';
import errorCodeMappedViaMessage from 'network/messages/errorCodeMappedViaMessage';
import errorMessages from 'network/messages/errorMessages';

/**
 * function which translate any text into user selected language
 * @param {string} text - text which need to translate
 * @returns translated text
 */
export const getTranslation = (text) => i18n.t(text);

/**
 * function which convert error code into translated error message
 * @param {number} errorCode - ErrorCode which is obtained from api response error
 * @returns { string } translated Error Message
 */
export const getTranslatedErrorMessage = (errorCode) => {
  const errorMessage =
    errorCodeMappedViaMessage.get(errorCode) || errorMessages.internalServerError;
  return getTranslation(errorMessage);
};
