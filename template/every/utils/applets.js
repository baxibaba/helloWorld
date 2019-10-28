/**
 * 数字格式化（每三位加一个,）
 */
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return result;
  }
  
  /**
   * 昵称过长切割
   * str 昵称
   * len 切割的长度
   */
  function cutNickname(str, len) {
    //length属性读出来的汉字长度为1
    if (str.length * 2 <= len) {
      return str;
    }
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
      s = s + str.charAt(i);
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2;
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + '...';
        }
      } else {
        strlen = strlen + 1;
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...';
        }
      }
    }
    return s;
  }
  
  export default {
    toThousands,
    cutNickname
  }
  