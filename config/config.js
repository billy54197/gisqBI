/** @Author: chenlj @Date: 2024/1/13 10:08 */

// 刷新token
// window.refreshToken = function (object) {
//     return new Promise((resolve, reject) => {
//         object.http({
//             url: `/gisqBI/api/public/sys/license?refreshTokenUrl=${object.token}`, // 刷新token的url
//             method: 'get',
//         }).then((res) => {
//             console.info('================');
//             console.info('================', 'refreshToken 返回', res);
//             const new_token = object.mUtils.getAppStore('accessToken2');
//             console.info('================', new_token);
//             resolve(new_token);
//         }).catch(() => {
//             reject(err);
//         });
//     });
// };

window.refreshToken = function (object) {
    return new Promise((resolve, reject) => {
        object.http({
            url: `http://106.58.222.16:9080/yntdcb/user/token`, // 刷新token的url
            method: 'get',
        }).then((res) => {
            console.info('================');
            console.info('================', 'refreshToken 返回', res);
            if (res.data.status == '401') {
                alert("会话已过期，请重新登录");
                resolve(null);
            } else {
                const token = res.data.data
                console.info('================', token);
                resolve(token);
            }
        }).catch((err) => {
            reject(err);
        });
    });
};
