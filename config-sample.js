/** 临时前端配置文件，可以在运行期修改配置
 ** 如需使用，请修改文件名为 config.js，或者复制到上级目录，文件名修改为 bi-config.js
 **/


window.bi = window.bi || {};
window.bi.config = window.bi.config || {};
window.bi.config.isPlatform = false;
window.bi.config.ding = {
    enabled: false,
    bid: '',
    signkey: '',
    sapp_id: '',
    sapp_name: ''
};

// window.bi.config.systemName = "数智可视化平台";
// window.bi.config.versionInfo = "版权所有 ©浙江臻善科技股份有限公司 v${version}";
// window.bi.config.projectName = '/gisqBI';
// window.bi.config.apiBaseURL = window.bi.config.projectName + '/api';
// window.bi.config.viewImageBaseURL = window.bi.config.projectName + '';
// 测试功能，对接中台公开版本
//window.bi.config.publicApiBase = "/public";

// 默认打开的组件分组配置
// window.bi.config.defaultWidgetType = "fgy";
// 自定义组件分组配置
// window.bi.config.templateGroupList = [{
//     id: "fgy",
//     code: "fgy",
//     name: "空间制图",
//     iconfont: "iconfont bi_ShoppingBag",
//     iconfontAli: "&#xe714;",
//     type: "type",
//     children: [
//         {
//             id: "my",
//             code: "my",
//             name: "常用",
//             type: "group",
//             children: [],
//             customComponents: ["gis-map", "gis-toc"]
//         },
//     ],
// }];

// 禁止手机端缩放功能
var enablePhoneScale = true;
var ua = navigator.userAgent;

if (enablePhoneScale && window.location.href.indexOf('view.html') > -1) {
    if ((ua.indexOf('Linux')>-1 && ua.indexOf('Android') > -1) ||
        ua.indexOf('iPhone') > -1 || ua.indexOf('MQQBrowser') > -1) {
        document.write('<meta  name="viewport"  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0 , target-densitydpi=device-dpi;"/>');
    }
}

if (ua.indexOf("Linux;") > -1 && ua.indexOf("Chrome/7") > -1) {
    document.write("<style>* { line-height: 1.2 }</style>");
}


