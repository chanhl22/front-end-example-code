Vue.component('hello', {
    template: '<h1>{{ title }}</h1>',
    data: function () {
        return {
            title: '안녕하세요!!'
        }
    }
})

new Vue({
    el: "#app"
})