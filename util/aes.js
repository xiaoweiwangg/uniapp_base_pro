import CryptoJS from '../node_modules/crypto-js/crypto-js.js'
 
// AES加密
export const encryptDes = (message, key) => {
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const encrypted = CryptoJS.AES.encrypt(message, keyHex, {
   mode: CryptoJS.mode.ECB,
   padding: CryptoJS.pad.Pkcs7
   });
  return encrypted.toString();
}
 
// AES解密
export const decryptDes = (ciphertext, key) => {
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const decrypted = CryptoJS.AES.decrypt({
     ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
   }, keyHex, { 
     mode: CryptoJS.mode.ECB,
     padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}