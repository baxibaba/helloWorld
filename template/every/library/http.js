import vue from 'vue'
import axios from 'axios'
import utils from './utils'
// 添加请求拦截
axios.interceptors.request.use(

    config => {
        debugger
        // vue.$vux.loading.show({ text: '加载中' })
        let PLATFORM
        let qsctoken = store.get('Qsc-Token')
        if (qsctoken) {
            console.log("qsctoken", qsctoken)
            qsctoken = qsctoken.replace(/\\/ig, '')
            qsctoken = JSON.parse(qsctoken)
        } else {
            qsctoken = {}
        }
        if (utils.isQscApp()) {
            PLATFORM = 'huzhu_web_view/'
        } else if (utils.isWeiXin()) {
            PLATFORM = 'huzhu_h5/'
        } else if (utils.isActivity()) {
            PLATFORM = 'huzhu_wap/'
        } else {
            PLATFORM = 'huzhu_wap/'
        }
        wx.miniProgram.getEnv(function (res) {
            if (res.miniprogram) {
                PLATFORM = 'huzhu_micro_program/'
            }
        })
        config.headers['Accept'] = 'application/json'
        config.headers['Content-Type'] = 'application/json'
        config.headers['Qsc-Token'] = qsctoken.access_token || ''
        config.headers['Platform'] = PLATFORM + '1.9.7/1.9.11'
        config.headers['Qsjk-Platform'] = '1'
        return config
    },
    error => {
        return Promise.reject(error)
    }

)
// 添加响应拦截
axios.interceptors.response.use(
    response => {
        switch (response.data.state || response.data.meta.code) {
            case 0:
                break
            case 200:
                //
                break
            case 10:
                // 未登录
                wx.miniProgram.getEnv(function (res) {
                        if (res.miniprogram) {
                            wx.miniProgram.redirectTo({
                                url: '/pages/web-view/index?url=https://health.qschou.com/physical/activityIndex/activity'
                            })
                        }
                        return
                    }

                )
                location.href = 'https://passport.qschou.com/signin.html?redirect_uri=' + encodeURIComponent(location.href)
                break
            case 11:
                // token 失效
                wx.miniProgram.getEnv(function (res) {
                        if (res.miniprogram) {
                            wx.miniProgram.redirectTo({
                                url: '/pages/web-view/index?url=https://health.qschou.com/physical/activityIndex/activity'
                            })
                        }
                        return
                    }

                )
                location.href = 'https://passport.qschou.com/signin.html?redirect_uri=' + encodeURIComponent(location.href)
                break
            case 12:
                // app用，绑定手机号
                // checkLogin.jumpLogin()
                break
            default:
                vue.$vux.toast.show({
                    type: 'text',
                    text: response.data.message || response.data.meta.msg,
                    width: 'auto',
                    position: 'middle'
                })
        }
        vue.$vux.loading.hide()
        return response.data
    },
    error => {
        vue.$vux.loading.hide()
        vue.$vux.toast.show({
            type: 'text',
            text: '网络错误，请重试',
            width: 'auto'
        })
        return Promise.reject(error)
    }
)

export default axios