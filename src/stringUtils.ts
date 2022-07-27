/**
 * @description: 字符串工具类
 */
const StringUtils = {
  /**
   * @description: 清除字符串内的空格
   * @param {string} str 字符串
   * @param {*} type 类型
   * @return {*} 处理空格后的字符串
   */
  trim: (str: string, type: 'all' | 'around' | 'front' | 'end') => {
    switch (type) {
      case 'all':
        return str.replace(/\s+/g, '');
      case 'around':
        return str.replace(/(^\s)|(\s%)/g, '');
      case 'end':
        return str.replace(/(^\s*)/g, '');
      case 'front':
        return str.replace(/(\s*$)/, '');
      default:
        return str;
    }
  },
};

export default StringUtils;
