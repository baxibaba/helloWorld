const screenWidth = 750;

Page({
    data: {
        currentIndex: 0,
        diffX: 0
    },
    onLoad() {
        var info = wx.getSystemInfoSync()
        this.setData({ info })
    },
    onPrev() {
        this.slideTo(this.data.currentIndex - 1)
    },
    onNext() {
        this.slideTo(this.data.currentIndex + 1)
    },
    slideTo(idx) {
        if (idx < 0) idx = 0
        if (idx > 2) idx = 2
        
        const diffX = -idx * screenWidth
        this.setData({
            currentIndex: idx,
            diffX
        })
    }
})