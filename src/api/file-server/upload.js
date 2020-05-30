import upload from '@/utils/file-server/upload'
import CryptoJS from 'crypto-js/crypto-js'

/**
 * 1.请求公钥
 * 2.用公钥加密一段 AES 密钥，并传给后端
 * 3.后端用该 AES 密钥加密token
 */
export function getToken() {
    let jse = new JSEncrypt();
    let Base64 = require('js-base64').Base64;
    let param = new URLSearchParams();
    let token;
    let key;

    return new Promise((resolve, reject) => {
        upload({
            url: '/upload/publickey',
            method: 'get'
        }).then(response => {
            var publicKey = Base64.decode(response.data)
            jse.setPublicKey(publicKey)
            key = secretKey(16);
            var encode = jse.encrypt(key);
            param.append('key', encode)

            upload({
                url: '/upload/token',
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

export function writeRecord(fileKey, type_id) {
    let param = new URLSearchParams();
    param.append('key', fileKey);
    param.append('type_id', type_id);

    return upload({
        url: '/upload/record',
        method: 'post',
        data: param
    })
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

function secretKey(hashLength) {
    if (!hashLength || typeof (Number(hashLength)) != 'number') { return; }
    var ar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', '',];
    var hs = [];
    var hl = Number(hashLength);
    var al = ar.length;
    for (var i = 0; i < hl; i++) {
        hs.push(ar[Math.floor(Math.random() * al)]);
    }

    return hs.join('');
}
