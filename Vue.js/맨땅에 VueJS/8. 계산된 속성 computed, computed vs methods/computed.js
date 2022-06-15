new Vue({
    el: "#app",
    data: {
        count: 0
    },
    computed: {
        isLargerThanTen: function () {
            return this.count * 3 > 10 ? "10보다 큽니다." : "10보다 작거나 같습니다."
        }
    }
})