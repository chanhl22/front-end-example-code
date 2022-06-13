new Vue({
    el: "#app",
    data: {
        count: 0,
    },
    methods: {
        addCount(number) {
            this.count = this.count + number
        }
    }
})