var vm1 = new Vue({
    el: '#app',
    data: {
        title: '첫 번째 인스턴스'
    }
})

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: '두 번째 인스턴스'
    },
    methods: {
        onChange: function () {
            vm1.title = '변경됨'
        }
    }
})