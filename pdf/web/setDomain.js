/*
 * @Description: 
 * @Version: 
 * @Author: liupf
 * @Date: 2021-12-20 09:42:15
 * @LastEditors: liupf
 * @LastEditTime: 2021-12-20 09:59:39
 */
(function setDomain() {
  function getDomain() {
    var host = location.hostname;
    var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (ip.test(host) === true || host === 'localhost') return host;
    var regex = /([^]*).*/;
    var match = host.match(regex);
    if (typeof match !== "undefined" && null !== match) host = match[1];
    if (typeof host !== "undefined" && null !== host) {
      var strAry = host.split(".");
      if (strAry.length > 1) {
        host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1];
      }
    }
    return host;
  }
  document.domain = getDomain();
})()
