var app = new Vue({
    el: '#app',
    data: {
        title: "안녕 VueJs!"
    },
    methods: {
        sayHello: function () {
            this.title = '안녕하십니까!'
            return this.title
        }
    }
})