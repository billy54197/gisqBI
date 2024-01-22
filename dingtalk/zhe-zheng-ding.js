(function (window) {
    var q = 'aplus_queue';
    // 如果已经注册，则直接跳出
    if (window[q]) {
        return
    } else {
        window[q] = []
    }

    var doZheZhengding = function (dingUser) {

        var q = 'aplus_queue';
        var aplus_queue = window[q]

        //稳定性监控
        try {
            const config = {
                bid: window.bi.config.ding.bid,
                signkey: window.bi.config.ding.signkey,
                gateway: 'https://wpk-gate.zjzwfw.gov.cn'
            };

            const wpk = new wpkReporter(config);
            wpk.installAll();
            window._wpk = wpk;
        } catch (err) {
            console.error('WpkReporter init fail', err);
        }

        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-rhost-v', 'alog.zjzwfw.gov.cn']
        });
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-rhost-g', 'alog.zjzwfw.gov.cn']
        });

        var u = navigator.userAgent
        var isAndroid = u.indexOf('Android') > -1
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['appId', isAndroid ? '28302650' : isIOS ? '28328447' : '47130293']
        });

        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_hold', 'BLOCK']
        });

        //基础埋点
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['aplus-waiting', 'MAN']
        });

        // 单页应用路由切换后 或 在异步获取到pv日志所需的参数后再执行sendPV：
        let data =  {
            // 当前你的应用信息，此两行请勿修改
            sapp_id: window.bi.config.ding.sapp_id,
            sapp_name: window.bi.config.ding.sapp_name,
            // 自定义PV参数key-value键值对（只能是这种平铺的json，不能做多层嵌套）
            page_id: window.location.pathname,
            page_name: document.title,
            page_url: window.location.href
        };

        // 如果传入了用户信息，则进行用户信息埋点
        if (dingUser && dingUser.isBI) {
            // 传入中台的用户
            data.userId = dingUser.userId;
            data.nickname = dingUser.nickname;
        } else if (dingUser) {
            // 设置会员昵称
            aplus_queue.push({
                action: "aplus.setMetaInfo",
                arguments: ["_user_nick", dingUser.nickname]  //当前会员用户昵称
            });
            // 设置会员ID
            aplus_queue.push({
                action: "aplus.setMetaInfo",
                arguments: ["_user_id", dingUser.userId]  //当前会员ID
            });

            // "设备ID是业务定义的，用于定义唯一的设备标识。这个目前没有要求，可不设置。"
            aplus_queue.push({
                action: "aplus.setMetaInfo",
                arguments: ["_dev_id", ""]
            });
        }

        aplus_queue.push({
            'action': 'aplus.sendPV',
            'arguments': [{
                is_auto: false
            },data]
        })

        // 此时被block住的日志会携带上用户信息逐条发出
        aplus_queue.push({
            action: 'aplus.setMetaInfo',
            arguments: ['_hold', 'START']
        });
    };

    var registerJs = function (url, properties, onload, onerror) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        if (properties) {
            for (var i in properties) {
                script[i] = properties[i]
            }
        }

        if (onload && typeof onload === 'function') {
            script.onload = onload
        }

        if (onerror && typeof onerror === 'function') {
            script.onerror = onerror
        }

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    };

    registerJs("https://g.alicdn.com/gdt/jsapi/1.8.2/index.js", {async: true},
        function () {
            registerJs("https://wpk-gate.zjzwfw.gov.cn/static/wpk-jssdk.1.0.2/wpkReporter.js", {
                    async: true, crossorigin: true
                },
                function () {
                    registerJs("https://alidt.alicdn.com/alilog/mlog/aplus_cloud.js",
                        {
                            async: true, id: 'beacon-aplus'
                        }, function () {
                            doZheZhengding(null);
                        })
                })
        })
})(window);
