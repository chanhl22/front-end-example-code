new Vue({
    el: "#app",
    data: {
        count: 0,
    },
    computed: {
        double: function () {
            return this.count * 2
        }
    },
    methods: {
        triple: function () {
            return this.count * 3
        }
    }
})