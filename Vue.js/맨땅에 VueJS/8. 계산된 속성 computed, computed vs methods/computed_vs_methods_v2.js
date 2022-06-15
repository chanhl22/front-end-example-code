new Vue({
    el: "#app",
    data: {
        count: 0,
        secondCount: 0
    },
    computed: {
        double: function () {
            console.log('Computed double')
            return this.count * 2
        }
    },
    methods: {
        triple: function () {
            console.log('methods triple')
            return this.count * 3
        }
    }
})