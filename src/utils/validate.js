/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param str
 * @returns {boolean}
 *
 * 校验用户名
 */
export function validUsername(str) {
  return str.trim().length > 0
}
