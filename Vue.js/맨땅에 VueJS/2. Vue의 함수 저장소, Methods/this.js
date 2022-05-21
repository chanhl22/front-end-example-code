var app = new Vue({
    el: '#app',
    data: {
        title: "안녕 VueJs!"
    },
    methods: {
        howAreYou: function () {
            return "기분이 어때?"
        },
        sayHello: function() {
            return this.title
        }
    }
})