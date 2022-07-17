Vue.component('hello', {
    template: '<h1>{{ title }} <button @click="changeTitle">타이틀변경</button></h1>',
    data: function () {
        return {
            title: '안녕하세요!!'
        }
    },
    methods: {
        changeTitle: function () {
            this.title = '변경된 타이틀'
        }
    }
})

new Vue({
    el: "#app"
})