/*
*判断Android 还是iOS
*/
function isiOSorAndroid () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var v = u.toLowerCase().includes('v')
    if (isIOS) {
       return 'iOS'
    }
    if (isAndroid) {
　　　　return 'android'
    }
};
/*
*获取字符串参数
*/
function GetQueryString(key, search) {
    // 获取URL中?之后的字符
    var str = search;
    str = str.substring(1,str.length);
    // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
    var arr = str.split(";");
    var obj = new Object();
     // 将每一个数组元素以=分隔并赋给obj对象
     for(var i = 0; i < arr.length; i++) {
             var tmp_arr = arr[i].split("=");
             obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
         }
      return obj[key];
  }


export default {
    isiOSorAndroid,
    GetQueryString
}