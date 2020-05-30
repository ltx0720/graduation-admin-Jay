import authorization from '@/utils/authorization'
import CryptoJS from 'crypto-js/crypto-js'

export function login(data) {
  let jse = new JSEncrypt();
  let Base64 = require('js-base64').Base64;
  let param = new URLSearchParams();
  let token;
  let key;

  return new Promise((resolve, reject) => {
    authorization({
      url: '/identify/publickey',
      method: 'get'
    }).then(response => {
      var publicKey = Base64.decode(response.data);
      jse.setPublicKey(publicKey);
      key = secretKey(16);
      var json = {
        key: key,
        username: data['username'],
        password: data['password']
      };
      var encode = jse.encrypt(JSON.stringify(json));
      param.append('detail', encode);

      authorization({
        url: '/identify/token',
        method: 'post',
        data: param
      }).then(response => {
        var encryptToken = Base64.decode(response.data)
        token = decrypt(encryptToken, key)
        resolve(token)
      })
    })
  })
}

function secretKey(hashLength) {
  if (!hashLength || typeof (Number(hashLength)) != 'number') { return; }
  var ar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E',];
  var hs = [];
  var hl = Number(hashLength);
  var al = ar.length;
  for (var i = 0; i < hl; i++) {
    hs.push(ar[Math.floor(Math.random() * al)]);
  }

  return hs.join('');
}

function decrypt(data, key) {
  var realKey = getKey(key);
  var decrypt = CryptoJS.AES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(data)
  }, CryptoJS.enc.Hex.parse(realKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}

function getKey(key) {
  var realKey = CryptoJS.SHA1(key);
  realKey = CryptoJS.SHA1(realKey).toString().substring(0, 32);
  return realKey;
}

function createMD5(data, key) {
  var str = data + '|' + key;
  var md5Str = CryptoJS.MD5(str).toString(CryptoJS.enc.Base64);
  return md5Str;
}