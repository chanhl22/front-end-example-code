new Vue({
    el: "#app",
    data: {
        cafeList: [[],[],[],[],[]],
    },
    created: function () {
        this.init();
    },
    methods: {
        init: function () {
            for (let i = 0; i < 5; i++) {
                this.cafeList[i].index = i;
                this.cafeList[i].checked = false;
            }
            console.log(this.cafeList);
        },
        onClickCafeCheck: function(x) {
            console.log(x);
        },
    }
})