var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요 Vue!'
    },
    methods: {
        test: function () {
            console.log(this.message);
        }
    }
})