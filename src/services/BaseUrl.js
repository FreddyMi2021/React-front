import StringCrypto from 'string-crypto';

const baseUrl = () => {
  return "https://school-api.sayna.io"
};

export const passwordKey = 'Bang Bang Squad 2021 Baby';

export const {
  encryptString,
  decryptString,
} = new StringCrypto();

export const decryptUser = (cryptedString) => {
  if(cryptedString){
    try {
      return decryptString(cryptedString, passwordKey)
    } catch (e) {
      // Rollbar.error("Something went wrong", e);
      localStorage.removeItem("currentUser")
      return undefined
    }
  }
  return undefined
}

export default baseUrl;