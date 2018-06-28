/**
 * 判断一个对象是否为空
 *
 * @export
 * @param {Object} obj
 * @returns
 */
export function isEmpty(obj: Object) {
  for (const key in obj) {
    return false;
  }
  return true;
}
