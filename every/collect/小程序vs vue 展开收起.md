    //点击查看更多详情 
    // 小程序
    toggle(e) {
        var index  = e.currentTarget.dataset.index,//当前点击的角标
            key = "list["+index+"].flag",
            val = this.data.list[index].flag;
            this.setData({
                [key]:!val
            })
    
    }

    //vue 通过计算属性

    computed: {
        showList: function () {

            if (this.showAll == false) {
                var showList = {};　
                if (this.toShowList.length <= 0) {
                    showList = '暂无简介';
                } else if (this.toShowList.length <= 50) {
                    showList = this.toShowList;
                } else if (this.toShowList.length > 50) {　　　
                    showList = this.toShowList.slice(0, 50) + '...'
                }
            } else {
                showList = this.toShowList
            }
            return showList;　　　
        },
        toggle: function () {
            if (this.showAll == false) {
                return '展开 ＞'
            } else {
                return '收起 ＞'
            }
        },
    },